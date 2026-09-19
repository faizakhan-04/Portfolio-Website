/* ============================================================
   Faiza Khan Portfolio — main.js
   ============================================================ */

(function () {
  'use strict';

/* ── Scroll reveal ───────────────────────────────────────── */

  function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
  }

  /* ── "beyond" oval draw-on animation ─────────────────────── */

  function initBeyondOval() {
    const oval = document.querySelector('.beyond-oval path');
    if (!oval) return;

    /* Use stroke length for dasharray so it draws cleanly */
    const len = oval.getTotalLength ? oval.getTotalLength() : 520;
    oval.style.strokeDasharray = len;
    oval.style.strokeDashoffset = len;
    oval.style.animation = `drawOval 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.55s forwards`;
  }

  /* ── Tab navigation — smooth scroll for same-page tabs ────── */

  function initTabNav() {
    const tabs = document.querySelectorAll('.nb-tab');
    if (!tabs.length) return;

    /* Smooth-scroll when a tab links to an anchor on the same page */
    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        const href = tab.getAttribute('href');
        if (href && href.charAt(0) === '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /* ── Rail scrollspy — darken whichever tab's section is in view ──
     Generic across pages: a tab only participates once its data-page
     value resolves to a real element on the current page (e.g. index.html
     has #home/#work/#contact but no #about, so "About" is left alone).
     Pages with no matching sections at all (the case studies) keep
     whatever static .active class is already in their markup. ────── */

  function initRailScrollspy() {
    const tabs = document.querySelectorAll('.nb-tab[data-page]');
    if (!tabs.length) return;

    const pairs = Array.from(tabs)
      .map((tab) => {
        const section = document.getElementById(tab.dataset.page);
        return section ? { tab, section } : null;
      })
      .filter(Boolean);

    if (!pairs.length) return;

    function update() {
      const viewportH = window.innerHeight || document.documentElement.clientHeight || 0;
      const y = window.scrollY + Math.round(viewportH * 0.30);
      let activeIndex = 0;
      pairs.forEach((pair, i) => {
        if (pair.section.offsetTop <= y) activeIndex = i;
      });
      pairs.forEach((pair, i) => {
        pair.tab.classList.toggle('active', i === activeIndex);
      });
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    /* Web fonts and images can shift section offsets after the first
       paint — recheck once everything has settled in, in addition to
       the immediate call below. */
    window.addEventListener('load', update);
    update();
  }

  /* ── Navbar scroll shadow ────────────────────────────────── */

  function initNavbarShadow() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener(
      'scroll',
      () => {
        navbar.style.boxShadow =
          window.scrollY > 8
            ? '0 1px 12px rgba(20,16,8,0.08)'
            : 'none';
      },
      { passive: true }
    );
  }

  /* ── Hero staggered entry ────────────────────────────────── */

  function initHeroEntry() {
    const flowText      = document.querySelector('.flow-text');
    const headline      = document.querySelector('.hero-headline');
    const sub           = document.querySelector('.hero-sub');
    const ctas          = document.querySelector('.hero-ctas');
    const thinking      = document.querySelector('.currently-thinking');
    const heroRight     = document.querySelector('.hero-right');

    const delays = [
      [flowText,   '0.1s'],
      [headline,   '0.2s'],
      [sub,        '0.4s'],
      [ctas,       '0.5s'],
      [thinking,   '0.62s'],
      [heroRight,  '0.3s'],
    ];

    delays.forEach(([el, delay]) => {
      if (el) el.style.animationDelay = delay;
    });
  }

  /* ── Page flip transition ────────────────────────────────── */

  function supports3D() {
    return !!(window.CSS && CSS.supports && CSS.supports('transform', 'rotateY(90deg)'));
  }

  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* Returns true when href leads to a different HTML page */
  function isPageNav(href) {
    if (!href) return false;
    if (/^https?:|^mailto:|^tel:|^javascript:/.test(href)) return false;
    if (href.charAt(0) === '#') return false;
    try {
      var a = document.createElement('a');
      a.href = href;
      return a.pathname !== window.location.pathname;
    } catch (_) {
      return false;
    }
  }

  var flipBusy = false;

  /* Mirrors the outgoing flip so arriving at a page feels like the
     other half of the same motion instead of an instant snap-in.
     .page-flip-in is baked into the markup on <main class="page">
     rather than added here — adding it only after this script runs
     would let the browser paint one frame in the resting state first,
     then jump to the animation's 0% (rotated/transparent) state, a
     flash worse than the snap this is meant to fix. The CSS animation
     itself needs no JS to run or finish (opacity/transform settle at
     their 100% values via `forwards` either way); this just strips
     the class afterward so will-change doesn't linger. Runs on every
     load rather than only when the referrer is an internal page:
     a plain multi-page site has no shared render tree to carry an
     "I just navigated" flag across the document boundary, and a full
     reload / typed URL should look identical to a click-through. */
  function initPageFlipIn() {
    var page = document.querySelector('.page');
    if (!page || !page.classList.contains('page-flip-in')) return;

    var DURATION = reducedMotion() ? 350 : 620;

    setTimeout(function () {
      page.classList.remove('page-flip-in');
    }, DURATION);
  }

  function initPageFlip() {
    /* Gracefully skip if 3D transforms are unsupported */
    if (!supports3D()) return;

    var DURATION = reducedMotion() ? 350 : 620;

    document.addEventListener('click', function (e) {
      if (flipBusy) return;

      var link = e.target.closest('a[href]');
      if (!link) return;

      var href = link.getAttribute('href');
      if (!isPageNav(href)) return;

      /* Let browser handle Ctrl/Cmd/Shift-clicks normally */
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

      e.preventDefault();
      flipBusy = true;

      var page = document.querySelector('.page');
      if (!page) { window.location.href = href; return; }

      /* Tab card lifts forward when clicked */
      var tab = link.closest('.nb-tab');
      if (tab) {
        tab.classList.add('tab-lifting');
        setTimeout(function () { tab.classList.remove('tab-lifting'); }, 220);
      }

      /* Shadow sweep overlay */
      if (!reducedMotion()) {
        var shadow = document.createElement('div');
        shadow.className = 'page-flip-shadow';
        shadow.setAttribute('aria-hidden', 'true');
        document.body.appendChild(shadow);
        setTimeout(function () {
          if (shadow.parentNode) shadow.parentNode.removeChild(shadow);
        }, DURATION + 100);
      }

      /* Flip out, then navigate — new page loads as-is underneath */
      page.classList.add('page-flip-out');
      setTimeout(function () {
        window.location.href = href;
      }, DURATION);
    });
  }

  /* ── Init ────────────────────────────────────────────────── */

  function init() {
    initScrollReveal();
    initBeyondOval();
    initTabNav();
    initRailScrollspy();
    initNavbarShadow();
    initHeroEntry();
    initPageFlipIn();
    initPageFlip();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
