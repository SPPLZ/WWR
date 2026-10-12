const $=id=>document.getElementById(id),audio=$('audio');
const servers=['https://de1.api.radio-browser.info','https://nl1.api.radio-browser.info','https://at1.api.radio-browser.info'];
let stations=[],current=null,showFavorites=false,map,markers,hls,request=0,playToken=0,timeout,debounce;
const read=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}};
let favorites=read('worldwave-favorites',[]);if(!Array.isArray(favorites))favorites=[];
const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
const region=new Intl.DisplayNames(['ko'],{type:'region'});
function countryName(code){try{return region.of(code)||code}catch{return code||'국가 미상'}}
const countryOf=s=>countryName(s.countrycode);
const flag=s=>/^[A-Z]{2}$/.test(s.countrycode)?String.fromCodePoint(...[...s.countrycode].map(c=>127397+c.charCodeAt(0))):'♪';
const isFav=s=>favorites.some(f=>f.stationuuid===s.stationuuid);
async function api(path){for(const host of servers){try{const r=await fetch(host+'/json/'+path,{signal:AbortSignal.timeout(8500)});if(!r.ok)throw Error();return await r.json()}catch{}}throw Error('API unavailable')}
function usable(s){return s.stationuuid&&/^https:\/\//i.test(s.url_resolved||s.url)}
function message(text,retry=false){$('stations').replaceChildren();const d=document.createElement('div');d.className='empty';d.textContent=text;if(retry){const b=document.createElement('button');b.textContent='다시 불러오기';b.onclick=load;d.append(document.createElement('br'),b)}$('stations').append(d)}
function toggleFavorite(s){if(isFav(s))favorites=favorites.filter(f=>f.stationuuid!==s.stationuuid);else favorites.push(s);save('worldwave-favorites',favorites);render()}
function visible(){if(!showFavorites)return stations;const q=$('search').value.trim().toLowerCase(),c=$('country').value,g=$('genre').value;return favorites.filter(s=>(!q||s.name.toLowerCase().includes(q))&&(!c||s.countrycode===c)&&(!g||(s.tags||'').includes(g)))}
function render(){const list=visible();$('stations').replaceChildren();$('count').textContent=list.length+'개';$('favCount').textContent=favorites.length;$('listTitle').textContent=showFavorites?'내가 담은 주파수':(!$('country').value?'국가별 방송국':countryName($('country').value)+' 방송국');$('favoriteNow').textContent=current&&isFav(current)?'♥':'♡';$('favoriteNow').setAttribute('aria-pressed',!!current&&isFav(current));
for(const s of list){const row=document.createElement('div');row.className='station'+(current?.stationuuid===s.stationuuid?' selected':'');const pick=document.createElement('button');pick.className='station-pick';pick.setAttribute('aria-label',s.name+' 재생');const icon=document.createElement('div');icon.className='station-art';icon.textContent=flag(s);const detail=document.createElement('div');detail.className='station-text';const name=document.createElement('strong');name.textContent=s.name;const info=document.createElement('small');info.textContent=countryOf(s)+' · '+((s.tags||'LIVE RADIO').split(',')[0]).slice(0,25);detail.append(name,info);pick.append(icon,detail);pick.onclick=()=>tune(s);const heart=document.createElement('button');heart.className='heart'+(isFav(s)?' saved':'');heart.textContent=isFav(s)?'♥':'♡';heart.setAttribute('aria-label',s.name+' 즐겨찾기');heart.setAttribute('aria-pressed',isFav(s));heart.onclick=()=>toggleFavorite(s);row.append(pick,heart);$('stations').append(row)}if(!list.length)message(showFavorites?'아직 담은 방송국이 없어요. 방송국 옆의 ♡를 눌러 나만의 목록을 만들어보세요.':'검색 결과가 없어요. 다른 이름이나 국가를 선택해보세요.');renderMarkers(list)}
function hasGeo(s){return s.geo_lat!==null&&s.geo_lat!==undefined&&s.geo_long!==null&&s.geo_long!==undefined&&Number.isFinite(+s.geo_lat)&&Number.isFinite(+s.geo_long)}
function renderMarkers(list){if(!map)return;markers.clearLayers();for(const s of list.filter(hasGeo)){const selected=current?.stationuuid===s.stationuuid;const m=L.circleMarker([s.geo_lat,s.geo_long],{radius:selected?9:5,color:selected?'#fff5c3':'#d6f5a3',weight:1,fillColor:selected?'#f2e6a3':'#c0ed86',fillOpacity:.85}).addTo(markers);m.bindTooltip(s.name);m.on('click',()=>tune(s))}}
function fail(){clearTimeout(timeout);audio.pause();$('status').textContent='연결할 수 없는 방송입니다. 재시도하거나 다른 방송국을 선택하세요.';$('liveLabel').textContent='CONNECTION UNAVAILABLE'}
async function tune(s){const token=++playToken;clearTimeout(timeout);if(hls){hls.destroy();hls=null}audio.pause();audio.removeAttribute('src');audio.load();current=s;$('nowName').textContent=s.name;$('art').textContent=flag(s);$('status').textContent='방송에 연결하고 있어요…';$('liveLabel').textContent='CONNECTING';$('destination').textContent=countryOf(s);$('location').textContent=s.name;$('play').disabled=false;$('favoriteNow').disabled=false;render();if(map&&hasGeo(s))map.flyTo([s.geo_lat,s.geo_long],5,{duration:1.4});timeout=setTimeout(()=>{if(token===playToken)fail()},20000);
const url=s.url_resolved||s.url;
const start=async()=>{try{await audio.play()}catch(e){if(token!==playToken)return;clearTimeout(timeout);if(e.name==='NotAllowedError'){$('status').textContent='재생 버튼을 눌러 청취를 시작하세요.';$('liveLabel').textContent='READY TO PLAY'}else if(e.name!=='AbortError')fail()}};
if((s.hls||/\.m3u8(?:\?|$)/i.test(url))&&!audio.canPlayType('application/vnd.apple.mpegurl')&&window.Hls?.isSupported()){hls=new Hls();hls.loadSource(url);hls.attachMedia(audio);hls.on(Hls.Events.MANIFEST_PARSED,start);hls.on(Hls.Events.ERROR,(_,d)=>{if(d.fatal&&token===playToken)fail()})}else{audio.src=url;start()}
if(navigator.mediaSession){navigator.mediaSession.metadata=new MediaMetadata({title:s.name,artist:countryOf(s),album:'WWR · World Web Radio'});navigator.mediaSession.setActionHandler('play',()=>tune(current));navigator.mediaSession.setActionHandler('pause',()=>audio.pause())}}
audio.addEventListener('playing',()=>{clearTimeout(timeout);$('status').textContent=countryOf(current)+' · 실시간 라디오';$('liveLabel').textContent='● NOW PLAYING';$('play').textContent='Ⅱ';$('play').setAttribute('aria-label','일시정지');$('equalizer').classList.add('on')});
audio.addEventListener('pause',()=>{$('play').textContent='▶';$('play').setAttribute('aria-label','재생');$('equalizer').classList.remove('on');if(current){$('status').textContent='일시정지 · 재생 버튼을 누르면 다시 연결합니다';$('liveLabel').textContent='PAUSED'}});
audio.addEventListener('error',()=>{if(current&&audio.getAttribute('src'))fail()});audio.addEventListener('waiting',()=>{if(current){$('status').textContent='버퍼링 중…';clearTimeout(timeout);timeout=setTimeout(fail,20000)}});
$('play').onclick=()=>{if(current){if(audio.paused)tune(current);else{clearTimeout(timeout);audio.pause()}}};$('favoriteNow').onclick=()=>current&&toggleFavorite(current);
function volume(){audio.volume=+$('volume').value/100;audio.muted=audio.volume===0;$('volumeValue').textContent=$('volume').value+'%';$('mute').textContent=audio.muted?'◖×':'◖))';$('mute').setAttribute('aria-label',audio.muted?'음소거 해제':'음소거');save('worldwave-volume',+$('volume').value)}$('volume').value=Math.min(100,Math.max(0,Number(read('worldwave-volume',70))||0));volume();$('volume').oninput=volume;let previous=70;$('mute').onclick=()=>{if(+$('volume').value){previous=+$('volume').value;$('volume').value=0}else $('volume').value=previous;volume()};

function uniqueStations(data){const seen=new Set();return data.filter(s=>{const key=s.url_resolved||s.url;if(!usable(s)||seen.has(key))return false;seen.add(key);return true})}
function twoPerCountry(data){const counts=new Map();return uniqueStations(data).filter(s=>{const code=s.countrycode;if(!/^[A-Z]{2}$/.test(code))return false;const count=counts.get(code)||0;if(count>=2)return false;counts.set(code,count+1);return true}).sort((a,b)=>countryOf(a).localeCompare(countryOf(b),'ko'))}
const countryCache=new Map();let activeCountries;
async function loadAllCountries(id,params){
  if(map)map.setView([27,20],3);
  const cacheKey=params.toString(),cached=countryCache.get(cacheKey);
  if(cached){stations=cached;render();$('browseHint').textContent='국가별 최대 2개 · 청취 가능한 방송이 2개 미만인 국가는 더 적게 표시됩니다.';return}
  const disk=read('wwr-country-preview',null);
  if(!params.has('name')&&!params.has('tag')&&disk&&Date.now()-disk.time<3600000&&Array.isArray(disk.stations)){
    stations=twoPerCountry(disk.stations);countryCache.set(cacheKey,stations);render();$('browseHint').textContent='국가별 최대 2개 · 청취 가능한 방송이 2개 미만인 국가는 더 적게 표시됩니다.';return;
  }
  if(!activeCountries){const data=await api('countrycodes?hidebroken=true');activeCountries=data.map(c=>c.name).filter(c=>/^[A-Z]{2}$/.test(c)).sort((a,b)=>countryName(a).localeCompare(countryName(b),'ko'))}
  if(id!==request)return;
  stations=[];let next=0,done=0,failed=0;const result=[];
  async function worker(){while(next<activeCountries.length&&id===request){const code=activeCountries[next++];const p=new URLSearchParams(params);p.set('countrycode',code);p.set('limit','20');try{let offset=0,picked=[];while(picked.length<2){p.set('offset',String(offset));const page=await api('stations/search?'+p);if(id!==request)return;picked=uniqueStations([...picked,...page.filter(s=>s.countrycode===code)]).slice(0,2);if(page.length<20)break;offset+=20;if(picked.length>=2)break}result.push(...picked)}catch{failed++}if(id!==request)return;done++;stations=twoPerCountry(result);if(stations.length)render();$('count').textContent=stations.length+'개';$('browseHint').textContent='국가별 2개씩 불러오는 중 · '+done+'/'+activeCountries.length+'개 국가';}}
  await Promise.all(Array.from({length:6},worker));if(id!==request)return;
  stations=twoPerCountry(result);render();
  $('browseHint').textContent=failed?'일부 국가를 불러오지 못했습니다.':'국가별 최대 2개 · 청취 가능한 방송이 2개 미만인 국가는 더 적게 표시됩니다.';
  if(failed){const retry=document.createElement('button');retry.textContent='다시 시도';retry.onclick=load;$('browseHint').append(' ',retry)}else{countryCache.set(cacheKey,stations);if(!params.has('name')&&!params.has('tag'))save('wwr-country-preview',{time:Date.now(),stations})}
}
async function load(){
  const id=++request;$('browseHint').textContent='';if(showFavorites){render();return}
  stations=[];if(markers)markers.clearLayers();message('세계의 방송국을 찾고 있어요…');$('count').textContent='불러오는 중';
  const p=new URLSearchParams({limit:'600',hidebroken:'true',is_https:'true',order:'clickcount',reverse:'true'});
  if($('search').value.trim())p.set('name',$('search').value.trim());if($('genre').value)p.set('tag',$('genre').value);
  try{if(!$('country').value){await loadAllCountries(id,p);return}
    p.set('countrycode',$('country').value);const data=await api('stations/search?'+p);if(id!==request)return;stations=uniqueStations(data);render();
    if(map){const coords=stations.filter(hasGeo).map(s=>[s.geo_lat,s.geo_long]);if(coords.length)map.fitBounds(coords,{padding:[50,50],maxZoom:6})}
  }catch{if(id!==request)return;stations=[];if(markers)markers.clearLayers();$('count').textContent='연결 실패';$('browseHint').textContent='';message('방송국 목록에 연결하지 못했어요. 잠시 후 다시 시도해주세요.',true)}
}
$('search').oninput=()=>{clearTimeout(debounce);debounce=setTimeout(load,400)};$('search').onkeydown=e=>{if(e.key==='Enter'){clearTimeout(debounce);load()}};$('country').onchange=load;$('genre').onchange=load;
for(const [id,fav] of [['explore',false],['favorites',true]])$(id).onclick=()=>{showFavorites=fav;$('explore').classList.toggle('active',!fav);$('favorites').classList.toggle('active',fav);load()};
$('random').onclick=()=>{const list=visible();if(list.length)tune(list[Math.floor(Math.random()*list.length)])};
if(window.L){map=L.map('map',{zoomControl:false,minZoom:2,maxZoom:12,worldCopyJump:true}).setView([27,20],3);L.control.zoom({position:'topright'}).addTo(map);const tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',subdomains:'abcd',maxZoom:19}).addTo(map);let errors=0;tiles.on('tileerror',()=>{if(++errors>5)$('mapError').hidden=false});tiles.on('tileload',()=>{$('mapError').hidden=true});markers=L.layerGroup().addTo(map)}else $('mapError').hidden=false;
const codes='AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW'.split(' ');codes.sort((a,b)=>countryName(a).localeCompare(countryName(b),'ko')).forEach(c=>$('country').add(new Option(countryName(c),c)));load();
