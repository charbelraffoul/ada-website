(function () {
  var prefersReducedMotion = false;
  try {
    prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {
    prefersReducedMotion = false;
  }

  if (prefersReducedMotion) return;

  function isInsideHero(el) {
    while (el) {
      if (el.classList && el.classList.contains('ds-hero')) return true;
      el = el.parentElement;
    }
    return false;
  }

  function getRevealTargets() {
    // Keep this fairly broad, but avoid the hero (already animated) and very small UI bits.
    var selector = [
      '.ds-wrap h1',
      '.ds-wrap h2',
      '.ds-wrap h3',
      '.ds-wrap p',
      '.ds-wrap blockquote',
      '.ds-wrap ul',
      '.ds-wrap ol',
      '.ds-wrap hr',
      '.ds-wrap figure',
      '.ds-wrap .ds-static-figure',
      '.ds-wrap .ds-embed',
      '.ds-wrap .ds-card',
      '.ds-wrap .boss-card',
      '.ds-wrap .ds-transition-box',
      '.ds-wrap .figure-block'
    ].join(',');

    var nodes = document.querySelectorAll(selector);
    var out = [];

    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (!el || !el.classList) continue;
      if (isInsideHero(el)) continue;

      // Don't reveal empty containers.
      var text = (el.textContent || '').trim();
      if (!text && el.tagName !== 'HR' && !el.querySelector('img,iframe,video')) continue;

      out.push(el);
    }

    return out;
  }

  function init() {
    var targets = getRevealTargets();

    // Add base class and a small stagger so grouped content feels nicer.
    // Keep the stagger subtle so content appears quickly.
    for (var i = 0; i < targets.length; i++) {
      var el = targets[i];
      el.classList.add('ds-reveal');
      // Stagger cycles every 10 items to avoid huge delays.
      el.style.setProperty('--ds-reveal-delay', (i % 10) * 25 + 'ms');
    }

    // If IntersectionObserver isn't available, just show everything.
    if (!('IntersectionObserver' in window)) {
      for (var j = 0; j < targets.length; j++) {
        targets[j].classList.add('ds-reveal--visible');
      }
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        for (var k = 0; k < entries.length; k++) {
          var entry = entries[k];
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('ds-reveal--visible');
          io.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12
      }
    );

    for (var m = 0; m < targets.length; m++) {
      io.observe(targets[m]);
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
