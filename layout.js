(() => {
  const main = document.querySelector('main');
  const handle = document.getElementById('panelResize');
  const panel = document.getElementById('stationPanel');
  const mobile = matchMedia('(max-width:650px)');
  const mapPanel = document.querySelector('.map-wrap');
  let mobileView = 'stations';
  const switcher = document.createElement('div');
  switcher.className = 'mobile-view-switch';
  switcher.setAttribute('role', 'group');
  switcher.setAttribute('aria-label', '모바일 화면 선택');
  switcher.innerHTML = '<button type="button" data-view="stations" aria-label="방송국" title="방송국" aria-controls="stationPanel" aria-pressed="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M5 8l13-5M15 12h3M15 16h3"/><circle cx="8.5" cy="14.5" r="2.5"/></svg></button><button type="button" data-view="map" aria-label="지도" title="지도" aria-controls="map" aria-pressed="false"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2V5zM9 3v16M15 5v16"/></svg></button>';
  main.before(switcher);
  switcher.addEventListener('click', event => {
    const button = event.target.closest('button[data-view]');
    if (!button) return;
    mobileView = button.dataset.view;
    applyCollapsed();
  });
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.id = 'sidebarToggle';
  toggle.setAttribute('aria-controls', 'stationPanel');
  toggle.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M16 9l-3 3 3 3"/></svg>';
  document.querySelector('.map-wrap').append(toggle);
  let collapsed = false;
  // Start with both desktop panels visible; collapse only for this visit.
  function applyCollapsed() {
    const player = document.querySelector('.player');
    const anchor = mobile.matches ? document.querySelector('header') : main;
    if (anchor.nextElementSibling !== player) anchor.after(player);
    main.classList.toggle('sidebar-collapsed', !mobile.matches && collapsed);
    main.dataset.mobileView = mobileView;
    panel.hidden = mobile.matches ? mobileView !== 'stations' : collapsed;
    mapPanel.hidden = mobile.matches && mobileView !== 'map';
    handle.hidden = mobile.matches || collapsed;
    for (const button of switcher.querySelectorAll('button')) {
      button.setAttribute('aria-pressed', String(button.dataset.view === mobileView));
    }
    toggle.setAttribute('aria-expanded', String(!collapsed));
    const label = collapsed ? '방송국 사이드바 펼치기' : '방송국 사이드바 접기';
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
    const keepFocus = document.activeElement === toggle;
    const parent = collapsed ? mapPanel.querySelector('.map-title') : panel.querySelector('.intro');
    if (toggle.parentElement !== parent) parent.append(toggle);
    if (keepFocus) toggle.focus({preventScroll:true});
  }
  toggle.addEventListener('click', () => {
    collapsed = !collapsed;
    applyCollapsed();

  });
  applyCollapsed();
  mobile.addEventListener('change', () => { mobileView = 'stations'; collapsed = false; applyCollapsed(); });
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
