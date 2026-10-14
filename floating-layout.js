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
 const country=document.getElementById('country');
 country.addEventListener('change',()=>{title.textContent=country.value?country.options[country.selectedIndex].text+' 방송국':'세계 방송국'});title.textContent='세계 방송국';
 new ResizeObserver(()=>{if(typeof map!=='undefined'&&map)map.invalidateSize({pan:false})}).observe(document.getElementById('map'));
})();


