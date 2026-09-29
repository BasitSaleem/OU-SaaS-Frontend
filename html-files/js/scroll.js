// Scroll progress engine + Reveal & Rise triggers

(function () {
  const targets = new Set();
  let ticking = false;
  let started = false;
  let lastTime = 0;

  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function measure(now = performance.now()) {
    ticking = false;
    const dt = Math.min(64, lastTime ? now - lastTime : 16.7);
    lastTime = now;
    let settling = false;
    const vh = window.innerHeight;
    for (const t of targets) {
      const r = t.el.getBoundingClientRect();
      let p;
      if (t.mode === 'pin') {
        const span = r.height - vh;
        p = span > 0 ? -r.top / span : 1;
      } else {
        p = (vh - r.top) / (vh + r.height);
      }
      p = Math.min(1, Math.max(0, p));
      if (t.smooth && t.last >= 0) {
        const k = 1 - Math.pow(1 - t.smooth, dt / 16.7);
        const next = t.last + (p - t.last) * k;
        if (Math.abs(p - next) > 0.0004) { p = next; settling = true; }
      }
      if (Math.abs(p - t.last) > 0.0002) {
        t.last = p;
        t.el.style.setProperty('--p', p.toFixed(4));
      }
    }
    if (settling) request();
    else lastTime = 0;
  }

  function request() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(measure);
    }
  }

  function start() {
    if (started) return;
    started = true;
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request, { passive: true });
  }

  window.registerScrollTarget = function (el, mode = 'through', smooth = 0) {
    if (!el) return;
    if (reduceMotion()) {
      el.style.setProperty('--p', mode === 'pin' ? '1' : '0.5');
      return;
    }
    const t = { el, mode, smooth, last: -1 };
    targets.add(t);
    start();
    request();
    return () => targets.delete(t);
  };

  // Trigger-once Intersection Observer for .reveal elements
  function initReveals() {
    if (reduceMotion() || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal, .reveal-stagger, .reveal-lines').forEach(el => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px' });

    document.querySelectorAll('.reveal, .reveal-stagger, .reveal-lines').forEach(el => io.observe(el));
  }

  // Rise effect (from Rise.jsx)
  function initRise() {
    if (reduceMotion() || !('IntersectionObserver' in window)) return;
    const TARGETS = [
      'main > section > .container > *',
      'main > section > div > .container > *',
      '[data-rise] > *',
      'footer > .container',
      'footer > .footer__mark',
    ].join(',');
    const SKIP = '.intro, .reveal, .reveal-stagger, .reveal-lines, .hero__sticky, .story, .rise';

    const els = [...document.querySelectorAll(TARGETS)].filter((el) => !el.hasAttribute('data-rise') && !el.matches(SKIP) && !el.closest(SKIP));
    els.forEach((el) => el.classList.add('rise'));

    let batch = 0, batchTimer = 0;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        e.target.style.setProperty('--rise-delay', `${Math.min(batch, 6) * 90}ms`);
        batch += 1;
        e.target.classList.add('is-in');
      });
      clearTimeout(batchTimer);
      batchTimer = setTimeout(() => { batch = 0; }, 120);
    }, { rootMargin: '0px 0px -8% 0px' });

    els.forEach((el) => io.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initReveals();
    initRise();
  });
})();
