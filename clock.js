(()=>{
const clock=document.getElementById('currentTime');
const formatter=new Intl.DateTimeFormat('ko-KR',{hour:'2-digit',minute:'2-digit',hourCycle:'h23'});
function update(){const now=new Date();clock.dateTime=now.toISOString();clock.textContent=formatter.format(now);clock.title=now.toLocaleDateString('ko-KR')+' · '+Intl.DateTimeFormat().resolvedOptions().timeZone}
update();setInterval(update,1000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)update()});
})();