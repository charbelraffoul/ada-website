(function () {
  var prefersReducedMotion = false;
  try {
    prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {
    prefersReducedMotion = false;
  }

  function inlineSvg(el, src) {
    return fetch(src)
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to load SVG: ' + src);
        return res.text();
      })
      .then(function (text) {
        el.innerHTML = text;
        var svg = el.querySelector('svg');
        if (!svg) throw new Error('No <svg> root found in: ' + src);

        // Ensure the SVG is responsive.
        if (!svg.getAttribute('width')) svg.setAttribute('width', '100%');
        if (!svg.getAttribute('height')) svg.setAttribute('height', 'auto');
        svg.setAttribute('preserveAspectRatio', svg.getAttribute('preserveAspectRatio') || 'xMidYMid meet');

        // Avoid a flash of the fully-rendered path before we apply dash styles.
        svg.style.visibility = 'hidden';

        return svg;
      });
  }

  function prepPath(path, durationMs) {
    if (!path || !path.getTotalLength) return;

    // Force a layout so styles apply.
    path.getBoundingClientRect();

    var len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);
    path.style.transition = 'stroke-dashoffset ' + String(durationMs || 1600) + 'ms ease-out';
  }

  function playPath(path) {
    if (!path) return;
    // Kick to next frame so transition triggers reliably.
    requestAnimationFrame(function () {
      path.style.strokeDashoffset = '0';
    });
  }

  function parsePathYs(d) {
    if (!d) return null;
    var nums = d.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi);
    if (!nums || nums.length < 4) return null;

    // For simple matplotlib rectangles, coords are x,y pairs.
    var ys = [];
    for (var i = 1; i < nums.length; i += 2) {
      var y = parseFloat(nums[i]);
      if (!isNaN(y)) ys.push(y);
    }
    if (!ys.length) return null;

    var minY = ys[0];
    var maxY = ys[0];
    for (var j = 1; j < ys.length; j++) {
      if (ys[j] < minY) minY = ys[j];
      if (ys[j] > maxY) maxY = ys[j];
    }

    return { minY: minY, maxY: maxY };
  }

  function getZeroLineY(svg) {
    // Prefer a dedicated baseline if present (matplotlib typically uses a black line2d).
    var line = svg.querySelector('#axes_1 path[style*="stroke: #000000"]');
    if (!line) line = svg.querySelector('#axes_1 path[style*="stroke:#000000"]');
    if (!line) return null;

    var d = line.getAttribute('d') || '';
    // Expect: M x y L x2 y
    var nums = d.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi);
    if (!nums || nums.length < 4) return null;
    var y = parseFloat(nums[1]);
    return isNaN(y) ? null : y;
  }

  function getAxisBarPaths(svg) {
    // Matplotlib bar charts expose bars as <g id="bar-..."> <path .../>.
    return Array.prototype.slice.call(svg.querySelectorAll('#axes_1 g[id^="bar-"] path'));
  }

  function prepBars(paths, zeroY, durationMs) {
    if (!paths || !paths.length) return;

    var eps = 0.75; // tolerance in SVG units

    for (var i = 0; i < paths.length; i++) {
      var p = paths[i];

      // Make SVG transforms behave more like CSS transforms.
      p.style.transformBox = 'fill-box';

      // Decide whether the bar is above or below the baseline.
      var origin = '50% 100%';
      var box = parsePathYs(p.getAttribute('d'));
      if (box && typeof zeroY === 'number') {
        var touchesBottom = Math.abs(box.maxY - zeroY) <= eps;
        var touchesTop = Math.abs(box.minY - zeroY) <= eps;

        // Positive bars typically touch the baseline at their bottom; negatives touch at their top.
        if (touchesTop && !touchesBottom) origin = '50% 0%';
        if (touchesBottom && !touchesTop) origin = '50% 100%';
      }

      p.style.transformOrigin = origin;

      // Start collapsed from the baseline side.
      p.style.transform = 'scaleY(0)';

      // Slight stagger so the reveal feels like drawing.
      p.style.transition = 'transform ' + String(durationMs || 1200) + 'ms ease-out';
      p.style.transitionDelay = String(i * 18) + 'ms';
    }
  }

  function playBars(paths) {
    if (!paths || !paths.length) return;
    requestAnimationFrame(function () {
      for (var i = 0; i < paths.length; i++) {
        paths[i].style.transform = 'scaleY(1)';
      }
    });
  }

  function initOne(container) {
    var src = container.getAttribute('data-svg-src');
    var mode = container.getAttribute('data-animate') || 'path';

    // Default expects the matplotlib line to be tagged with id="oil-line" (either on the path or a wrapping <g>).
    var pathSelector = container.getAttribute('data-path-selector') || '#oil-line';

    if (!src) return;

    // If already inlined, don't do it twice.
    if (container.__dsSvgInited) return;
    container.__dsSvgInited = true;

    inlineSvg(container, src)
      .then(function (svg) {
        if (prefersReducedMotion) {
          if (svg && svg.style) svg.style.visibility = '';
          return;
        }

        var bars = null;
        var path = null;

        if (mode === 'bars') {
          bars = getAxisBarPaths(svg);
          var zeroY = getZeroLineY(svg);
          prepBars(bars, zeroY, 1100);

          // Now that styles are applied, show the SVG.
          if (svg && svg.style) svg.style.visibility = '';

          if (!('IntersectionObserver' in window)) {
            playBars(bars);
            return;
          }

          var ioBars = new IntersectionObserver(
            function (entries) {
              for (var i = 0; i < entries.length; i++) {
                if (!entries[i].isIntersecting) continue;
                playBars(bars);
                ioBars.disconnect();
                break;
              }
            },
            { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.2 }
          );

          ioBars.observe(container);
          return;
        }

        // Default: draw a single path.
        var target = svg.querySelector(pathSelector);
        if (!target) {
          if (svg && svg.style) svg.style.visibility = '';
          return;
        }

        // Matplotlib sometimes puts the id on a <g> that contains a <path>.
        path = target;
        if (!path.getTotalLength && target.querySelector) {
          path = target.querySelector('path');
        }

        if (!path || !path.getTotalLength) {
          if (svg && svg.style) svg.style.visibility = '';
          return;
        }

        prepPath(path, 1600);

        // Now that dash styles are applied, show the SVG.
        if (svg && svg.style) svg.style.visibility = '';

        // Reveal when scrolled into view.
        if (!('IntersectionObserver' in window)) {
          playPath(path);
          return;
        }

        var io = new IntersectionObserver(
          function (entries) {
            for (var i = 0; i < entries.length; i++) {
              if (!entries[i].isIntersecting) continue;
              playPath(path);
              io.disconnect();
              break;
            }
          },
          { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.2 }
        );

        io.observe(container);
      })

      .catch(function () {
        // On any error, do nothing (fallback <img> in markup can still be used).
      });
  }

  function init() {
    var nodes = document.querySelectorAll('[data-svg-src]');
    for (var i = 0; i < nodes.length; i++) initOne(nodes[i]);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
