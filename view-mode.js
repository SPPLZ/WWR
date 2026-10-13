(()=>{
const root=document.documentElement,list=document.getElementById('listView'),grid=document.getElementById('gridView');
function apply(mode){root.dataset.stationView=mode;list.setAttribute('aria-pressed',String(mode==='list'));grid.setAttribute('aria-pressed',String(mode==='grid'))}
let saved='list';try{if(localStorage.getItem('wwr-station-view')==='grid')saved='grid'}catch{}apply(saved);
for(const [button,mode] of [[list,'list'],[grid,'grid']])button.addEventListener('click',()=>{apply(mode);try{localStorage.setItem('wwr-station-view',mode)}catch{}});
})();