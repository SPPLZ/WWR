// Country representative coordinates: https://github.com/mledoze/countries (ODbL)
const countryCenters={"AW":[12.5,-69.96666666],"AF":[33,65],"AO":[-12.5,18.5],"AI":[18.25,-63.16666666],"AX":[60.116667,19.9],"AL":[41,20],"AD":[42.5,1.5],"AE":[24,54],"AR":[-34,-64],"AM":[40,45],"AS":[-14.33333333,-170],"AQ":[-90,0],"TF":[-49.25,69.167],"AG":[17.05,-61.8],"AU":[-27,133],"AT":[47.33333333,13.33333333],"AZ":[40.5,47.5],"BI":[-3.5,30],"BE":[50.83333333,4],"BJ":[9.5,2.25],"BF":[13,-2],"BD":[24,90],"BG":[43,25],"BH":[26,50.55],"BS":[24.25,-76],"BA":[44,18],"BL":[18.5,-63.41666666],"SH":[-15.95,-5.72],"BY":[53,28],"BZ":[17.25,-88.75],"BM":[32.33333333,-64.75],"BO":[-17,-65],"BQ":[12.18,-68.25],"BR":[-10,-55],"BB":[13.16666666,-59.53333333],"BN":[4.5,114.66666666],"BT":[27.5,90.5],"BV":[-54.43333333,3.4],"BW":[-22,24],"CF":[7,21],"CA":[60,-95],"CC":[-12.5,96.83333333],"CH":[47,8],"CL":[-30,-71],"CN":[35,105],"CI":[8,-5],"CM":[6,12],"CD":[0,25],"CG":[-1,15],"CK":[-21.23333333,-159.76666666],"CO":[4,-72],"KM":[-12.16666666,44.25],"CV":[16,-24],"CR":[10,-84],"CU":[21.5,-80],"CW":[12.116667,-68.933333],"CX":[-10.5,105.66666666],"KY":[19.5,-80.5],"CY":[35,33],"CZ":[49.75,15.5],"DE":[51,9],"DJ":[11.5,43],"DM":[15.41666666,-61.33333333],"DK":[56,10],"DO":[19,-70.66666666],"DZ":[28,3],"EC":[-2,-77.5],"EG":[27,30],"ER":[15,39],"EH":[24.5,-13],"ES":[40,-4],"EE":[59,26],"ET":[8,38],"FI":[64,26],"FJ":[-18,175],"FK":[-51.75,-59],"FR":[46,2],"FO":[62,-7],"FM":[6.91666666,158.25],"GA":[-1,11.75],"GB":[54,-2],"GE":[42,43.5],"GG":[49.46666666,-2.58333333],"GH":[8,-2],"GI":[36.13333333,-5.35],"GN":[11,-10],"GP":[16.25,-61.583333],"GM":[13.46666666,-16.56666666],"GW":[12,-15],"GQ":[2,10],"GR":[39,22],"GD":[12.11666666,-61.66666666],"GL":[72,-40],"GT":[15.5,-90.25],"GF":[4,-53],"GU":[13.46666666,144.78333333],"GY":[5,-59],"HK":[22.267,114.188],"HM":[-53.1,72.51666666],"HN":[15,-86.5],"HR":[45.16666666,15.5],"HT":[19,-72.41666666],"HU":[47,20],"ID":[-5,120],"IM":[54.25,-4.5],"IN":[20,77],"IO":[-6,71.5],"IE":[53,-8],"IR":[32,53],"IQ":[33,44],"IS":[65,-18],"IL":[31.47,35.13],"IT":[42.83333333,12.83333333],"JM":[18.25,-77.5],"JE":[49.25,-2.16666666],"JO":[31,36],"JP":[36,138],"KZ":[48,68],"KE":[1,38],"KG":[41,75],"KH":[13,105],"KI":[1.41666666,173],"KN":[17.33333333,-62.75],"KR":[37,127.5],"XK":[42.666667,21.166667],"KW":[29.5,45.75],"LA":[18,105],"LB":[33.83333333,35.83333333],"LR":[6.5,-9.5],"LY":[25,17],"LC":[13.88333333,-60.96666666],"LI":[47.26666666,9.53333333],"LK":[7,81],"LS":[-29.5,28.5],"LT":[56,24],"LU":[49.75,6.16666666],"LV":[57,25],"MO":[22.16666666,113.55],"MF":[18.08333333,-63.95],"MA":[32,-5],"MC":[43.73333333,7.4],"MD":[47,29],"MG":[-20,47],"MV":[3.25,73],"MX":[23,-102],"MH":[9,168],"MK":[41.83333333,22],"ML":[17,-4],"MT":[35.83333333,14.58333333],"MM":[22,98],"ME":[42.5,19.3],"MN":[46,105],"MP":[15.2,145.75],"MZ":[-18.25,35],"MR":[20,-12],"MS":[16.75,-62.2],"MQ":[14.666667,-61],"MU":[-20.28333333,57.55],"MW":[-13.5,34],"MY":[2.5,112.5],"YT":[-12.83333333,45.16666666],"NA":[-22,17],"NC":[-21.5,165.5],"NE":[16,8],"NF":[-29.03333333,167.95],"NG":[10,8],"NI":[13,-85],"NU":[-19.03333333,-169.86666666],"NL":[52.5,5.75],"NO":[62,10],"NP":[28,84],"NR":[-0.53333333,166.91666666],"NZ":[-41,174],"OM":[21,57],"PK":[30,70],"PA":[9,-80],"PN":[-25.06666666,-130.1],"PE":[-10,-76],"PH":[13,122],"PW":[7.5,134.5],"PG":[-6,147],"PL":[52,20],"PR":[18.25,-66.5],"KP":[40,127],"PT":[39.5,-8],"PY":[-23,-58],"PS":[31.9,35.2],"PF":[-15,-140],"QA":[25.5,51.25],"RE":[-21.15,55.5],"RO":[46,25],"RU":[60,100],"RW":[-2,30],"SA":[25,45],"SD":[15,30],"SN":[14,-14],"SG":[1.36666666,103.8],"GS":[-54.5,-37],"SJ":[78,20],"SB":[-8,159],"SL":[8.5,-11.5],"SV":[13.83333333,-88.91666666],"SM":[43.76666666,12.41666666],"SO":[10,49],"PM":[46.83333333,-56.33333333],"RS":[44,21],"SS":[7,30],"ST":[1,7],"SR":[4,-56],"SK":[48.66666666,19.5],"SI":[46.11666666,14.81666666],"SE":[62,15],"SZ":[-26.5,31.5],"SX":[18.033333,-63.05],"SC":[-4.58333333,55.66666666],"SY":[35,38],"TC":[21.75,-71.58333333],"TD":[15,19],"TG":[8,1.16666666],"TH":[15,100],"TJ":[39,71],"TK":[-9,-172],"TM":[40,60],"TL":[-8.83333333,125.91666666],"TO":[-20,-175],"TT":[11,-61],"TN":[34,9],"TR":[39,35],"TV":[-8,178],"TW":[23.5,121],"TZ":[-6,35],"UG":[1,32],"UA":[49,32],"UM":[19.3,166.633333],"UY":[-33,-56],"US":[38,-97],"UZ":[41,64],"VA":[41.9,12.45],"VC":[13.25,-61.2],"VE":[8,-66],"VG":[18.431383,-64.62305],"VI":[18.35,-64.933333],"VN":[16.16666666,107.83333333],"VU":[-16,167],"WF":[-13.3,-176.2],"WS":[-13.58333333,-172.33333333],"YE":[15,48],"ZA":[-29,24],"ZM":[-15,30],"ZW":[-20,30]};
const $=id=>document.getElementById(id),audio=$('audio');
const servers=['https://de1.api.radio-browser.info','https://nl1.api.radio-browser.info','https://at1.api.radio-browser.info'];
let stations=[],current=null,showFavorites=false,map,markers,hls,request=0,playToken=0,timeout;
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
function visible(){if(!showFavorites)return stations;const c=$('country').value,g=$('genre').value;return favorites.filter(s=>(!c||s.countrycode===c)&&(!g||(s.tags||'').includes(g)))}
function render(){const list=visible();$('stations').replaceChildren();$('count').textContent=list.length+'개';$('favCount').textContent=favorites.length;$('listTitle').textContent=showFavorites?'내가 담은 주파수':(!$('country').value?'국가별 방송국':countryName($('country').value)+' 방송국');$('favoriteNow').textContent=current&&isFav(current)?'♥':'♡';$('favoriteNow').setAttribute('aria-pressed',!!current&&isFav(current));
let previousCountry='';const grouped=!showFavorites&&!$('country').value;const ranks=new Map();
for(const s of list){if(grouped&&s.countrycode!==previousCountry){previousCountry=s.countrycode;const heading=document.createElement('h3');heading.className='country-heading';heading.textContent=countryOf(s)+' · '+list.filter(x=>x.countrycode===s.countrycode).length+'개 방송국';$('stations').append(heading)}const row=document.createElement('div');row.dataset.country=s.countrycode;row.dataset.stationId=s.stationuuid;row.className='station'+(current?.stationuuid===s.stationuuid?' selected':'');const pick=document.createElement('button');pick.className='station-pick';pick.setAttribute('aria-label',s.name+' 재생');const icon=document.createElement('div');icon.className='station-art';icon.textContent=flag(s);const detail=document.createElement('div');detail.className='station-text';const name=document.createElement('strong');const rank=(ranks.get(s.countrycode)||0)+1;ranks.set(s.countrycode,rank);name.textContent=s.name;const info=document.createElement('small');info.textContent=countryOf(s)+' · 재생 클릭 '+Number(s.clickcount||0).toLocaleString('ko')+'회'+(!hasGeo(s)?' · 위치 정보 없음':'');detail.append(name,info);pick.append(icon,detail);pick.onclick=()=>tune(s);const heart=document.createElement('button');heart.className='heart'+(isFav(s)?' saved':'');heart.textContent=isFav(s)?'♥':'♡';heart.setAttribute('aria-label',s.name+' 즐겨찾기');heart.setAttribute('aria-pressed',isFav(s));heart.onclick=()=>toggleFavorite(s);row.append(pick,heart);$('stations').append(row)}if(!list.length)message(showFavorites?'아직 담은 방송국이 없어요. 방송국 옆의 ♡를 눌러 나만의 목록을 만들어보세요.':'검색 결과가 없어요. 다른 이름이나 국가를 선택해보세요.');renderMarkers(list)}

function hasGeo(s){return s.geo_lat!==null&&s.geo_lat!==undefined&&s.geo_long!==null&&s.geo_long!==undefined&&Number.isFinite(+s.geo_lat)&&Number.isFinite(+s.geo_long)&&Math.abs(+s.geo_lat)<=90&&Math.abs(+s.geo_long)<=180}
function stationPosition(s){return hasGeo(s)?[+s.geo_lat,+s.geo_long]:null}

let overviewStations=[];
function mapStations(list){
  if($('country').value||showFavorites)return list;
  const chosen=list.filter(hasGeo),counts=new Map();
  for(const s of chosen)counts.set(s.countrycode,(counts.get(s.countrycode)||0)+1);
  const ids=new Set(chosen.map(s=>s.stationuuid));
  for(const s of overviewStations){if(ids.has(s.stationuuid)||(counts.get(s.countrycode)||0)>=2)continue;chosen.push(s);ids.add(s.stationuuid);counts.set(s.countrycode,(counts.get(s.countrycode)||0)+1)}
  return chosen;
}
async function loadOverview(id,params){
  const key='wwr-geo-overview-v1:'+params.toString(),disk=read(key,null);
  try{
    if(disk&&Date.now()-disk.time<3600000&&Array.isArray(disk.stations)){overviewStations=disk.stations.filter(hasGeo)}
    else{
      const p=new URLSearchParams(params);p.set('has_geo_info','true');p.set('limit','10000');let data=[],offset=0;
      while(id===request){p.set('offset',String(offset));const page=await api('stations/search?'+p);if(id!==request)return;data.push(...page);if(page.length<10000)break;offset+=10000}
      if(id!==request)return;overviewStations=twoPerCountry(data.filter(hasGeo));save(key,{time:Date.now(),stations:overviewStations});
    }
    if(id===request&&!$('country').value)renderMarkers(visible());
  }catch{if(id===request)$('mapNoteText').textContent+=' · 지도 방송국 보충 실패: 새로고침해 주세요'}
}
function renderMarkers(list){
  if(!map)return;markers.clearLayers();const groups=new Map();let missing=0;
  for(const s of mapStations(list)){const pos=stationPosition(s);if(!pos){missing++;continue}const key=pos.join(',');if(!groups.has(key))groups.set(key,{pos,stations:[]});groups.get(key).stations.push(s)}
  $('mapNoteText').textContent=!$('country').value&&!showFavorites?'등록 좌표가 있는 방송국 · 국가별 최대 2개 · 원을 눌러 선택':'방송국 실제 좌표 · 원을 눌러 선택'+(missing?' · 위치 정보 없는 '+missing+'개는 목록에서 선택':'');
  for(const group of groups.values()){
    const selected=group.stations.some(s=>s.stationuuid===current?.stationuuid);
    const marker=L.circleMarker(group.pos,{radius:selected?8:5,color:selected?'#fff5c3':'#a3f3bf',weight:1.5,fillColor:selected?'#f2e6a3':'#1ed760',fillOpacity:.9}).addTo(markers);
    const tip=document.createElement('span');tip.textContent=group.stations.map(s=>s.name).join(' / ');marker.bindTooltip(tip);
    if(group.stations.length===1){marker.on('click',()=>tune(group.stations[0]))}
    else{const popup=document.createElement('div');const title=document.createElement('strong');title.textContent='같은 위치의 방송국';popup.append(title);for(const s of group.stations){const button=document.createElement('button');button.className='map-station-choice';button.textContent=s.name;button.onclick=()=>{map.closePopup();tune(s)};popup.append(button)}marker.bindPopup(popup)}
  }
}
function fail(){clearTimeout(timeout);audio.pause();$('status').textContent='연결할 수 없는 방송입니다. 재시도하거나 다른 방송국을 선택하세요.';$('liveLabel').textContent='CONNECTION UNAVAILABLE'}
async function tune(s){const token=++playToken;clearTimeout(timeout);if(hls){hls.destroy();hls=null}audio.pause();audio.removeAttribute('src');audio.load();current=s;$('nowName').textContent=s.name;$('art').textContent=flag(s);$('status').textContent='방송에 연결하고 있어요…';$('liveLabel').textContent='CONNECTING';$('destination').textContent=countryOf(s);$('location').textContent=s.name;$('play').disabled=false;$('favoriteNow').disabled=false;render();if(map&&stationPosition(s))map.panTo(stationPosition(s),{animate:true,duration:1.4});timeout=setTimeout(()=>{if(token===playToken)fail()},20000);
const url=s.url_resolved||s.url;
const start=async()=>{try{await audio.play()}catch(e){if(token!==playToken)return;clearTimeout(timeout);if(e.name==='NotAllowedError'){$('status').textContent='재생 버튼을 눌러 청취를 시작하세요.';$('liveLabel').textContent='READY TO PLAY'}else if(e.name!=='AbortError')fail()}};
if((s.hls||/\.m3u8(?:\?|$)/i.test(url))&&!audio.canPlayType('application/vnd.apple.mpegurl')&&window.Hls?.isSupported()){hls=new Hls();hls.loadSource(url);hls.attachMedia(audio);hls.on(Hls.Events.MANIFEST_PARSED,start);hls.on(Hls.Events.ERROR,(_,d)=>{if(d.fatal&&token===playToken)fail()})}else{audio.src=url;start()}
if(navigator.mediaSession){navigator.mediaSession.metadata=new MediaMetadata({title:s.name,artist:countryOf(s),album:'WWR · World Web Radio'});navigator.mediaSession.setActionHandler('play',()=>tune(current));navigator.mediaSession.setActionHandler('pause',()=>audio.pause())}}
audio.addEventListener('playing',()=>{clearTimeout(timeout);$('status').textContent=countryOf(current)+' · 실시간 라디오';$('liveLabel').textContent='● NOW PLAYING';$('play').textContent='Ⅱ';$('play').setAttribute('aria-label','일시정지');$('equalizer').classList.add('on')});
audio.addEventListener('pause',()=>{$('play').textContent='▶';$('play').setAttribute('aria-label','재생');$('equalizer').classList.remove('on');if(current){$('status').textContent='일시정지 · 재생 버튼을 누르면 다시 연결합니다';$('liveLabel').textContent='PAUSED'}});
audio.addEventListener('error',()=>{if(current&&audio.getAttribute('src'))fail()});audio.addEventListener('waiting',()=>{if(current){$('status').textContent='버퍼링 중…';clearTimeout(timeout);timeout=setTimeout(fail,20000)}});
$('play').onclick=()=>{if(current){if(audio.paused)tune(current);else{clearTimeout(timeout);audio.pause()}}};$('favoriteNow').onclick=()=>current&&toggleFavorite(current);
function volume(){audio.volume=+$('volume').value/100;audio.muted=audio.volume===0;$('volumeValue').textContent=$('volume').value+'%';$('mute').textContent=audio.muted?'◖×':'◖))';$('mute').setAttribute('aria-label',audio.muted?'음소거 해제':'음소거');save('worldwave-volume',+$('volume').value)}$('volume').value=Math.min(100,Math.max(0,Number(read('worldwave-volume',70))||0));volume();$('volume').oninput=volume;let previous=70;$('mute').onclick=()=>{if(+$('volume').value){previous=+$('volume').value;$('volume').value=0}else $('volume').value=previous;volume()};


function normalizeStation(s){return {...s,countrycode:String(s.countrycode||'').trim().toUpperCase()}}
function popularity(a,b){return Number(b.clickcount||0)-Number(a.clickcount||0)||Number(b.votes||0)-Number(a.votes||0)||String(a.name).localeCompare(String(b.name))}
function uniqueStations(data){const urls=new Set(),names=new Set();return data.map(normalizeStation).sort(popularity).filter(s=>{const prefix=s.countrycode+'|',url=prefix+(s.url_resolved||s.url),name=prefix+String(s.name||s.stationuuid).toLowerCase().replace(/\s+/g,'').replace(/\((?:mp3|aac|opus)[^)]*\)/gi,'');if(!usable(s)||urls.has(url)||names.has(name))return false;urls.add(url);names.add(name);return true})}
function countryOrder(a,b){if(a==='KR')return b==='KR'?0:-1;if(b==='KR')return 1;return countryName(a).localeCompare(countryName(b),'ko')}
function twoPerCountry(data){const groups=new Map();for(const s of uniqueStations(data)){if(!/^[A-Z]{2}$/.test(s.countrycode)||!countryCenters[s.countrycode])continue;const group=groups.get(s.countrycode)||[];if(group.length<2)group.push(s);groups.set(s.countrycode,group)}return [...groups.keys()].sort(countryOrder).flatMap(c=>groups.get(c))}
const countryCache=new Map();let activeCountries;
async function loadAllCountries(id,params){
  overviewStations=[];
  if(map){map.stop();map.invalidateSize();map.fitBounds([[-55,-170],[75,180]],{padding:[25,25],maxZoom:3,animate:false})}
  void loadOverview(id,params);
  const cacheKey=params.toString(),cached=countryCache.get(cacheKey);
  if(cached){stations=cached;render();$('browseHint').textContent='국가별 재생 클릭 상위 2개 · 실시간 청취자 수가 아닙니다. 등록된 HTTPS 방송이 부족한 국가는 0~1개입니다.';return}
  const disk=read('wwr-country-preview-v3',null);
  if(!params.has('name')&&!params.has('tag')&&disk&&Date.now()-disk.time<3600000&&Array.isArray(disk.stations)){
    stations=twoPerCountry(disk.stations);countryCache.set(cacheKey,stations);render();$('browseHint').textContent='국가별 재생 클릭 상위 2개 · 실시간 청취자 수가 아닙니다. 등록된 HTTPS 방송이 부족한 국가는 0~1개입니다.';return;
  }
  if(!activeCountries){const data=await api('countrycodes?hidebroken=true');activeCountries=[...new Set(['KR',...data.map(c=>String(c.name||'').trim().toUpperCase()).filter(c=>/^[A-Z]{2}$/.test(c)&&countryCenters[c])])].sort(countryOrder)}
  if(id!==request)return;
  stations=[];let next=0,done=0,failed=0;const result=[];
  async function worker(){while(next<activeCountries.length&&id===request){const code=activeCountries[next++];const p=new URLSearchParams(params);p.set('countrycode',code);p.set('limit','20');try{let offset=0,picked=[];while(picked.length<2){p.set('offset',String(offset));const page=await api('stations/search?'+p);if(id!==request)return;picked=uniqueStations([...picked,...page.map(normalizeStation).filter(s=>s.countrycode===code)]).slice(0,2);if(page.length<20)break;offset+=20;if(picked.length>=2)break}result.push(...picked)}catch{failed++}if(id!==request)return;done++;stations=twoPerCountry(result);if(stations.length)render();$('count').textContent=stations.length+'개';$('browseHint').textContent='국가별 2개씩 불러오는 중 · '+done+'/'+activeCountries.length+'개 국가';}}
  await Promise.all(Array.from({length:6},worker));if(id!==request)return;
  stations=twoPerCountry(result);render();
  $('browseHint').textContent=failed?'일부 국가를 불러오지 못했습니다.':'국가별 재생 클릭 상위 2개 · 실시간 청취자 수가 아닙니다. 등록된 HTTPS 방송이 부족한 국가는 0~1개입니다.';
  if(failed){const retry=document.createElement('button');retry.textContent='다시 시도';retry.onclick=load;$('browseHint').append(' ',retry)}else{countryCache.set(cacheKey,stations);if(!params.has('name')&&!params.has('tag'))save('wwr-country-preview-v3',{time:Date.now(),stations})}
}
async function load(){
  const id=++request;$('browseHint').textContent='';if(showFavorites){render();return}
  stations=[];if(markers)markers.clearLayers();message('세계의 방송국을 찾고 있어요…');$('count').textContent='불러오는 중';
  const p=new URLSearchParams({limit:'600',hidebroken:'true',is_https:'true',order:'clickcount',reverse:'true'});
  if($('genre').value)p.set('tag',$('genre').value);
  try{if(!$('country').value){await loadAllCountries(id,p);return}
    p.set('countrycode',$('country').value);const data=await api('stations/search?'+p);if(id!==request)return;stations=uniqueStations(data);render();
    if(map){const coords=stations.map(stationPosition).filter(Boolean);if(coords.length)map.fitBounds(coords,{padding:[50,50],maxZoom:6});else if(countryCenters[$('country').value])map.setView(countryCenters[$('country').value],5)}
  }catch{if(id!==request)return;stations=[];if(markers)markers.clearLayers();$('count').textContent='연결 실패';$('browseHint').textContent='';message('방송국 목록에 연결하지 못했어요. 잠시 후 다시 시도해주세요.',true)}
}
$('country').onchange=()=>{closeCountrySearch();load()};$('genre').onchange=load;
for(const [id,fav] of [['explore',false],['favorites',true]])$(id).onclick=()=>{showFavorites=fav;$('explore').classList.toggle('active',!fav);$('favorites').classList.toggle('active',fav);load()};
$('random').onclick=()=>{const list=visible();if(list.length)tune(list[Math.floor(Math.random()*list.length)])};
if(window.L){map=L.map('map',{zoomControl:false,zoomSnap:0.25,minZoom:0,maxZoom:12,worldCopyJump:true}).setView([27,20],3);L.control.zoom({position:'topright'}).addTo(map);const tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',subdomains:'abcd',maxZoom:19}).addTo(map);let errors=0;tiles.on('tileerror',()=>{if(++errors>5)$('mapError').hidden=false});tiles.on('tileload',()=>{$('mapError').hidden=true});markers=L.layerGroup().addTo(map);/* Leaflet updates marker positions itself during zoom. */}else $('mapError').hidden=false;
const codes='AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW'.split(' ');codes.sort((a,b)=>countryName(a).localeCompare(countryName(b),'ko')).forEach(c=>$('country').add(new Option(countryName(c),c)));load();




// Search names using browser CLDR translations, including local scripts.
const countryLanguages='ko en fr ja zh zh-Hant ar de es pt ru it nl pl uk tr fa he hi bn ur ta te ml kn mr gu pa si ne th vi id ms jv su tl fil my km lo mn ka hy az kk ky uz tg tk ps ku am sw so ha yo ig zu xh af st sn rw ny mg el bg sr hr bs sl mk sq ro hu cs sk da sv nb nn fi is et lv lt ga cy mt eu ca gl be uz bo dz ti om bs sd ug dv'.split(' ');
const countryEnglish=new Intl.DisplayNames(['en'],{type:'region'});
const countryTranslators=Intl.DisplayNames.supportedLocalesOf(countryLanguages).map(locale=>new Intl.DisplayNames([locale],{type:'region'}));
function normalizeCountryQuery(value){return String(value).normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[\s\p{P}\p{S}]/gu,'')}
const countryAliases={KR:['한국','대한민국','남한','korea','republic of korea','south korea','한국공화국'],KP:['북한','north korea'],US:['미국','usa','united states of america'],GB:['영국','uk','britain','great britain'],CN:['중국','中国','中國','中华人民共和国','中華人民共和國'],TW:['대만','臺灣','台灣'],JP:['일본','日本','日本国'],SA:['사우디','saudi','السعودية','المملكة العربية السعودية'],AE:['uae','الإمارات'],RU:['russia','россия'],VN:['vietnam','việt nam']};
const countrySearchIndex=codes.map(code=>({code,name:countryName(code),english:countryEnglish.of(code),names:[...new Set([code,countryName(code),countryEnglish.of(code),...(countryAliases[code]||[]),...countryTranslators.map(t=>t.of(code))].map(normalizeCountryQuery))]}));
function findCountries(query){const q=normalizeCountryQuery(query);if(!q)return [];const exactCode=countrySearchIndex.find(c=>c.code.toLowerCase()===q);if(exactCode)return [exactCode];return countrySearchIndex.filter(c=>c.names.some(n=>n.includes(q))).sort((a,b)=>Number(b.names.includes(q))-Number(a.names.includes(q))||a.name.localeCompare(b.name,'ko'))}
function closeCountrySearch(){ $('countrySearch').value='';$('countryResults').hidden=true;$('countryResults').replaceChildren();$('countrySearchStatus').textContent=''}
function chooseCountry(code){$('country').value=code;closeCountrySearch();$('countrySearch').focus();load()}
function renderCountrySearch(){const results=$('countryResults'),query=$('countrySearch').value;results.replaceChildren();if(!query.trim()){results.hidden=true;return}const matches=findCountries(query);results.hidden=false;$('countrySearchStatus').textContent=matches.length+'개 국가 검색됨';if(!matches.length){const p=document.createElement('p');p.textContent='일치하는 국가가 없습니다. 다른 이름이나 국가 코드를 입력하세요.';results.append(p)}for(const c of matches){const button=document.createElement('button');button.type='button';button.dataset.country=c.code;button.textContent=c.name;const detail=document.createElement('small');detail.textContent=c.english+' · '+c.code;button.append(detail);button.onclick=()=>chooseCountry(c.code);results.append(button)}}
$('countrySearch').addEventListener('input',e=>{if(!e.isComposing)renderCountrySearch()});
$('countrySearch').addEventListener('compositionend',renderCountrySearch);
$('countrySearch').addEventListener('focus',()=>{if($('countrySearch').value)renderCountrySearch()});
$('countrySearch').addEventListener('keydown',e=>{if(e.isComposing)return;if(e.key==='Escape'){closeCountrySearch();return}if(e.key==='ArrowDown'){e.preventDefault();$('countryResults').querySelector('button')?.focus()}if(e.key==='Enter'){e.preventDefault();const first=findCountries(e.target.value)[0];if(first)chooseCountry(first.code)}});
$('countryResults').addEventListener('keydown',e=>{const buttons=[...$('countryResults').querySelectorAll('button')],i=buttons.indexOf(document.activeElement);if(e.key==='Escape'){closeCountrySearch();$('countrySearch').focus()}if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();buttons[(i+(e.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length]?.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('.country-search-wrap'))$('countryResults').hidden=true});
