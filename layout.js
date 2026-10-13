(() => {
  const main = document.querySelector('main');
  const handle = document.getElementById('panelResize');
  const mobile = matchMedia('(max-width:650px)');
  let width = 360, height = 330, dragging = false;
  try {
    const saved = JSON.parse(localStorage.getItem('wwr-panel-size'));
    if (Number.isFinite(saved?.width)) width = saved.width;
    if (Number.isFinite(saved?.height)) height = saved.height;
  } catch {}
  const limits = () => mobile.matches ? [220, 650] : [280, Math.max(280, main.clientWidth - 340)];
  function apply() {
    const [min, max] = limits();
    const value = Math.round(Math.min(max, Math.max(min, mobile.matches ? height : width)));
    main.style.setProperty('--station-width', `${mobile.matches ? width : value}px`);
    main.style.setProperty('--map-height', `${mobile.matches ? value : height}px`);
    handle.setAttribute('aria-orientation', mobile.matches ? 'horizontal' : 'vertical');
    handle.setAttribute('aria-valuemin', min);
    handle.setAttribute('aria-valuemax', max);
    handle.setAttribute('aria-valuenow', value);
    handle.setAttribute('aria-valuetext', `${mobile.matches ? '지도 높이' : '방송국 목록 너비'} ${value}px`);
  }
  function save() {
    try { localStorage.setItem('wwr-panel-size', JSON.stringify({width, height})); } catch {}
  }
  function set(value) {
    const [min, max] = limits();
    value = Math.min(max, Math.max(min, value));
    if (mobile.matches) height = value; else width = value;
    apply();
  }
  handle.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    dragging = true;
    handle.setPointerCapture(event.pointerId);
    main.classList.add('resizing');
    event.preventDefault();
    handle.focus();
  });
  handle.addEventListener('pointermove', event => {
    if (!dragging) return;
    const rect = (mobile.matches ? document.querySelector('.map-wrap') : document.getElementById('stationPanel')).getBoundingClientRect();
    set(mobile.matches ? event.clientY - rect.top : event.clientX - rect.left);
  });
  function finish() { dragging = false; main.classList.remove('resizing'); save(); }
  handle.addEventListener('pointerup', finish);
  handle.addEventListener('pointercancel', finish);
  handle.addEventListener('lostpointercapture', finish);
  handle.addEventListener('dblclick', () => { width = 360; height = 330; apply(); save(); });
  handle.addEventListener('keydown', event => {
    const keys = mobile.matches ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];
    if (![...keys, 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const [min, max] = limits();
    set(event.key === 'Home' ? min : event.key === 'End' ? max : Number(handle.getAttribute('aria-valuenow')) + (event.key === keys[0] ? -20 : 20));
    save();
  });
  window.addEventListener('resize', apply);
  mobile.addEventListener('change', apply);
  new ResizeObserver(() => {
    if (typeof map !== 'undefined' && map) map.invalidateSize({pan: false, debounceMoveend: true});
  }).observe(document.getElementById('map'));
  apply();
})();
