export function LoadingIntro() {
  return (
    <div
      id="sp-intro"
      aria-hidden
      suppressHydrationWarning
      className="fixed inset-0 z-[999] cursor-pointer bg-black"
      style={{ willChange: "opacity, transform" }}
    >
      <video
        suppressHydrationWarning
        className="absolute inset-0 h-full w-full object-contain"
        muted
        playsInline
        preload="none"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function(){
  var el = document.getElementById('sp-intro');
  if (!el) return;
  var v = el.querySelector('video');
  var KEY = 'sp_intro_seen';
  function none() { el.style.display = 'none'; window.__spIntroActive = false; }
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var seen = false;
  try { seen = !!window.sessionStorage.getItem(KEY); } catch (e) {}
  var playable = v && v.canPlayType && v.canPlayType('video/mp4; codecs="avc1.640032"');
  if (reduced || seen || window.innerWidth < 900 || !playable) { none(); return; }
  try { window.sessionStorage.setItem(KEY, '1'); } catch (e) {}
  window.__spIntroActive = true;

  var en = (document.documentElement.lang || '').indexOf('en') === 0;
  var onboarding = location.pathname.indexOf('/questionnaire') !== -1;
  var src = '/intro/' + (onboarding ? 'onboarding' : (en ? 'en' : 'fr')) + '.mp4?v=3';

  var finished = false, started = false;
  function exit(fast) {
    if (finished) return;
    finished = true;
    window.__spIntroActive = false;
    window.removeEventListener('pointerdown', skip);
    window.removeEventListener('keydown', skip);
    var d = fast ? 300 : 650;
    el.style.transition = 'opacity ' + d + 'ms ease-in, transform ' + d + 'ms ease-in';
    el.style.opacity = '0';
    el.style.transform = 'scale(1.05)';
    el.style.pointerEvents = 'none';
    try { window.dispatchEvent(new Event('sp-intro-exit')); } catch (e) {}
    setTimeout(function () {
      el.style.display = 'none';
      try { v.pause(); v.removeAttribute('src'); v.load(); } catch (e) {}
    }, d + 60);
  }
  function skip() { exit(true); }
  window.addEventListener('pointerdown', skip);
  window.addEventListener('keydown', skip);

  var giveUp = setTimeout(function () { if (!started) exit(true); }, 2500);
  function go() {
    if (started || finished) return;
    started = true;
    clearTimeout(giveUp);
    var p;
    try { p = v.play(); } catch (e) { exit(true); return; }
    if (p && p.catch) p.catch(function () { exit(true); });
    setTimeout(function () { exit(false); }, 4600);
  }
  v.muted = true; v.defaultMuted = true; v.playsInline = true;
  v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
  v.addEventListener('canplaythrough', go);
  v.addEventListener('ended', function () { exit(false); });
  v.addEventListener('error', function () { exit(true); });
  v.preload = 'auto';
  v.src = src;
  v.load();
})();
`,
        }}
      />
    </div>
  )
}
