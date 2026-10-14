(() => {
 const panel=document.getElementById('stationPanel'),mapPanel=document.querySelector('.map-wrap'),header=document.querySelector('header'),player=document.querySelector('.player');
 document.getElementById('panelResize').hidden=true; mapPanel.hidden=false;
 const shell=document.createElement('section');shell.className='radio-float';shell.setAttribute('aria-label','라디오 패널');
 panel.before(shell);
 const title=panel.querySelector('h1');header.prepend(title);
 const themeToggle=document.querySelector('.theme-toggle');document.body.append(themeToggle);
 const grip=document.createElement('button');grip.type='button';grip.className='panel-grip';grip.innerHTML='<span></span>';grip.setAttribute('aria-controls','stationPanel');
 shell.append(grip,header,panel,player);
 let opened=true;
 function show(open){opened=open;shell.classList.toggle('is-collapsed',!open);panel.hidden=!open;header.hidden=!open;grip.setAttribute('aria-expanded',String(open));grip.setAttribute('aria-label',open?'방송국 패널 접기':'방송국 패널 펼치기');grip.title=open?'방송국 패널 접기':'방송국 패널 펼치기';}
 grip.addEventListener('click',()=>show(!opened));
 shell.addEventListener('keydown',e=>{if(e.key==='Escape')show(false)});
 show(true);
 const sizeHandle=document.createElement('button');sizeHandle.type='button';sizeHandle.className='float-resize';sizeHandle.setAttribute('aria-label','패널 크기 조절');sizeHandle.title='드래그 또는 방향키로 크기 조절 · 두 번 클릭하여 초기화';shell.append(sizeHandle);
 const mobile=matchMedia('(max-width:650px)');let sizes={};try{sizes=JSON.parse(localStorage.getItem('wwr-floating-size'))||{}}catch{}
 function fit(width,height){const margin=mobile.matches?24:40;return {width:Math.max(Math.min(320,innerWidth-margin),Math.min(width,innerWidth-margin)),height:Math.max(Math.min(560,innerHeight-margin),Math.min(height,innerHeight-margin))}}
 function applySize(width,height,save=false){const size=fit(width,height);shell.style.setProperty('--float-width',size.width+'px');shell.style.setProperty('--float-height',size.height+'px');sizeHandle.setAttribute('aria-valuetext',Math.round(size.width)+' × '+Math.round(size.height));if(save){sizes[mobile.matches?'mobile':'desktop']=size;try{localStorage.setItem('wwr-floating-size',JSON.stringify(sizes))}catch{}}}
 function restore(){const size=sizes[mobile.matches?'mobile':'desktop']||{};applySize(size.width||370,size.height||(mobile.matches?innerHeight*.7:Math.min(720,innerHeight*.8)))}
 let dragging=null;
 sizeHandle.addEventListener('pointerdown',e=>{if(e.button!==0)return;e.preventDefault();const rect=shell.getBoundingClientRect();dragging={x:e.clientX,y:e.clientY,width:rect.width,height:rect.height};sizeHandle.setPointerCapture(e.pointerId)});
 sizeHandle.addEventListener('pointermove',e=>{if(!dragging)return;applySize(dragging.width+(mobile.matches?0:e.clientX-dragging.x),dragging.height+dragging.y-e.clientY)});
 function finish(){if(!dragging)return;dragging=null;const rect=shell.getBoundingClientRect();applySize(rect.width,rect.height,true)}
 sizeHandle.addEventListener('pointerup',finish);sizeHandle.addEventListener('pointercancel',finish);sizeHandle.addEventListener('lostpointercapture',finish);
 sizeHandle.addEventListener('keydown',e=>{if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();const r=shell.getBoundingClientRect(),step=e.shiftKey?40:16;applySize(r.width+(mobile.matches?0:e.key==='ArrowRight'?step:e.key==='ArrowLeft'?-step:0),r.height+(e.key==='ArrowUp'?step:e.key==='ArrowDown'?-step:0),true)});
 sizeHandle.addEventListener('dblclick',()=>{delete sizes[mobile.matches?'mobile':'desktop'];try{localStorage.setItem('wwr-floating-size',JSON.stringify(sizes))}catch{}restore()});
 addEventListener('resize',restore);restore();

 const country=document.getElementById('country');
 country.addEventListener('change',()=>{title.textContent=country.value?country.options[country.selectedIndex].text+' 방송국':'세계 방송국'});title.textContent='세계 방송국';
 new ResizeObserver(()=>{if(typeof map!=='undefined'&&map)map.invalidateSize({pan:false})}).observe(document.getElementById('map'));
})();






