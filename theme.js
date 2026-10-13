(()=>{
const root=document.documentElement,button=document.getElementById('themeToggle'),system=matchMedia('(prefers-color-scheme: dark)');
let preference=null;try{const saved=localStorage.getItem('wwr-theme');if(saved==='light'||saved==='dark')preference=saved}catch{}
function apply(theme){root.dataset.theme=theme;const dark=theme==='dark';button.textContent=dark?'☀ 라이트 모드':'☾ 다크 모드';button.setAttribute('aria-label',dark?'라이트 모드':'다크 모드');button.setAttribute('aria-pressed',String(dark));document.querySelector('meta[name="theme-color"]').content=dark?'#000000':'#f8fafd';document.dispatchEvent(new Event('wwr-theme-change'))}
button.addEventListener('click',()=>{preference=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('wwr-theme',preference)}catch{}apply(preference)});
system.addEventListener('change',()=>{if(!preference)apply(system.matches?'dark':'light')});
apply(preference||(system.matches?'dark':'light'));
})();
