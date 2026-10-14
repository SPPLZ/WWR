/* Adapted from Gemini's geometry proposal; shared state with the existing collapse UI. */
function initPanelGeometry(shell, grip, setOpen) {
  const key = 'wwr-panel-geometry-v2';
  const clamp = (n, min, max) => Math.max(min, Math.min(n, max));
  const mode = () => (innerWidth <= 600 || (typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches && Math.min(innerWidth,innerHeight) <= 600)) ? 'mobile' : 'desktop';
  let saved = {}, state, gesture = null, suppressUntil = 0;
  try { saved = JSON.parse(localStorage.getItem(key)) || {}; } catch {}
  if (typeof saved !== 'object' || Array.isArray(saved)) saved = {};
  const collapsed = () => shell.classList.contains('is-collapsed');
  const bounds = () => ({ w: Math.max(1, innerWidth - 24), h: Math.max(1, innerHeight - 24) });
  function fit() {
    const b = bounds();
    state.w = clamp(state.w, Math.min(320,b.w), b.w);
    state.h = clamp(state.h, Math.min(480,b.h), b.h);
    const height = collapsed() ? 121 : state.h;
    state.x = clamp(state.x,12, Math.max(12,innerWidth-state.w-12));
    state.y = clamp(state.y,12, Math.max(12,innerHeight-height-12));
    // Mobile stays centered above the bottom edge, including after restoring old positions.
    if(mode() === 'mobile') {
      state.w = Math.max(1,innerWidth-24);
      state.x = 12;
      state.y = Math.max(12,innerHeight-height-12);
    }
  }
  function paint() {
    fit();
    if(mode() === 'mobile')shell.classList.add('phone-panel');else shell.classList.remove('phone-panel');
    for (const [name,value] of Object.entries({x:state.x,y:state.y,w:state.w,h:collapsed()?121:state.h})) {
      shell.style.setProperty('--panel-'+name,value+'px');
    }
  }
  function save() { saved[mode()] = {...state}; try { localStorage.setItem(key,JSON.stringify(saved)); } catch {} }
  function restore() {
    const b=bounds(), old=saved[mode()];
    const valid=old && ['x','y','w','h'].every(k=>Number.isFinite(old[k]));
    const h=Math.min(720,b.h*.8);
    state=valid?{...old}:{x:12,y:innerHeight-h-12,w:Math.min(370,b.w),h};
    paint();
  }
  shell.classList.add('geometry-managed');
  const labels={n:'위',s:'아래',e:'오른쪽',w:'왼쪽',ne:'오른쪽 위',nw:'왼쪽 위',se:'오른쪽 아래',sw:'왼쪽 아래'};
  for(const dir of Object.keys(labels)) {
    const handle=document.createElement('button');
    handle.type='button';handle.className='resize-handle handle-'+dir;handle.dataset.dir=dir;
    handle.setAttribute('aria-label',labels[dir]+' 크기 조절');
    handle.title='드래그 또는 방향키로 크기 조절 · 두 번 클릭하여 초기화';
    handle.addEventListener('dblclick',()=>{delete saved[mode()];restore();save();});
    handle.addEventListener('keydown',e=>{
      if(!e.key.startsWith('Arrow'))return;
      e.preventDefault();e.stopPropagation();
      const step=e.shiftKey?32:8;
      resize({...state},dir,e.key==='ArrowRight'?step:e.key==='ArrowLeft'?-step:0,e.key==='ArrowDown'?step:e.key==='ArrowUp'?-step:0);
      save();
    });
    shell.append(handle);
  }
  function resize(start,dir,dx,dy) {
    if(mode() === 'mobile' && dir !== 'n')return;
    const b=bounds(), minW=Math.min(320,b.w), minH=Math.min(480,b.h);
    const right=start.x+start.w, bottom=start.y+start.h;
    state={...start};
    if(dir.includes('e'))state.w=clamp(start.w+dx,minW,innerWidth-start.x-12);
    if(dir.includes('s'))state.h=clamp(start.h+dy,minH,innerHeight-start.y-12);
    if(dir.includes('w')){state.x=clamp(start.x+dx,12,right-minW);state.w=right-state.x;}
    if(dir.includes('n')){state.y=clamp(start.y+dy,12,bottom-minH);state.h=bottom-state.y;}
    paint();
  }
  shell.addEventListener('pointerdown',e=>{
    if(gesture || e.button!==0 || e.isPrimary===false)return;
    const target=e.target, handle=target.closest('.resize-handle');
    const onGrip=grip.contains(target);
    if(mode() === 'mobile' && (!handle || handle.dataset.dir !== 'n'))return;
    if(!handle&&!onGrip&&target.closest('button,input,select,textarea,a,label,#stations,[contenteditable]'))return;
    if(handle&&collapsed())return;
    suppressUntil=0;
    gesture={id:e.pointerId,x:e.clientX,y:e.clientY,start:{...state},dir:handle?.dataset.dir,moved:false};
    gesture.capture=onGrip?grip:shell;
    gesture.capture.setPointerCapture(e.pointerId);
    if(handle)e.preventDefault();
  });
  shell.addEventListener('pointermove',e=>{
    if(!gesture||gesture.id!==e.pointerId)return;
    const dx=e.clientX-gesture.x,dy=e.clientY-gesture.y;
    if(!gesture.moved&&Math.hypot(dx,dy)<5)return;
    gesture.moved=true;shell.classList.add('is-manipulating');e.preventDefault();
    if(gesture.dir)resize(gesture.start,gesture.dir,dx,dy);
    else { state.x=gesture.start.x+dx;state.y=gesture.start.y+dy;paint(); }
  });
  function finish(e) {
    if(!gesture||gesture.id!==e.pointerId)return;
    if(gesture.moved){suppressUntil=performance.now()+400;save();}
    const capture=gesture.capture;
    gesture=null;shell.classList.remove('is-manipulating');
    if(capture.hasPointerCapture(e.pointerId))capture.releasePointerCapture(e.pointerId);
  }
  shell.addEventListener('pointerup',finish);
  shell.addEventListener('pointercancel',finish);
  shell.addEventListener('lostpointercapture',finish);
  shell.addEventListener('click',e=>{
    if(e.detail!==0&&performance.now()<suppressUntil){e.preventDefault();e.stopImmediatePropagation();}
  },true);
  // Gemini's nearest-edge proposal, with the anchor retained across dragging.
  let collapseAnchor = 'top';
  function changeOpen(open) {
    if(open === !collapsed()) return;
    if(!open) {
      const bottomGap = innerHeight - state.y - state.h;
      collapseAnchor = bottomGap < state.y ? 'bottom' : 'top';
      if(collapseAnchor === 'bottom') state.y += state.h - 121;
    } else if(collapseAnchor === 'bottom') {
      state.y -= state.h - 121;
    }
    setOpen(open);
    paint();
    save();
  }
  grip.addEventListener('click',()=>changeOpen(collapsed()));
  grip.addEventListener('keydown',e=>{
    if(mode() === 'mobile')return;
    if(!e.altKey||!e.key.startsWith('Arrow'))return;
    e.preventDefault();const step=e.shiftKey?32:8;
    state.x+=e.key==='ArrowRight'?step:e.key==='ArrowLeft'?-step:0;
    state.y+=e.key==='ArrowDown'?step:e.key==='ArrowUp'?-step:0;
    paint();save();
  });
  shell.addEventListener('keydown',e=>{if(e.key==='Escape'&&!e.target.closest('input,select,textarea')){changeOpen(false);grip.focus();}});
  let previousMode=mode();
  addEventListener('resize',()=>{gesture=null;shell.classList.remove('is-manipulating');if(mode()!==previousMode){previousMode=mode();restore();}else paint();});
  restore();
}
