/* Tamari & Léo — shared behaviour (all directions) */
(function () {
  // Nav: transparent over hero → solid on scroll
  var nav = document.querySelector('[data-nav]');
  if (nav) {
    var heroEl = document.querySelector('.guide-hero, .hero, header');
    var onScroll = function () {
      var threshold = heroEl ? heroEl.offsetHeight - 80 : window.innerHeight * 0.72 - 80;
      if (window.scrollY > threshold) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Drawer menu — burger opens the panel
  var burger = document.querySelector('[data-burger]');
  var menu = document.querySelector('[data-links]');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }

  // Close affordances (X button, backdrop, nav links)
  document.querySelectorAll('[data-close]').forEach(function (el) {
    el.addEventListener('click', function () { if (menu) menu.classList.remove('open'); });
  });
  if (menu) {
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }

  // Drawer submenu accordions
  document.querySelectorAll('.menu__acc').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var sub = btn.nextElementSibling;
      var open = btn.classList.toggle('open');
      if (sub) sub.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  // Scroll reveal
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Newsletter placeholder (future integration)
  document.querySelectorAll('[data-newsletter]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.parentNode.querySelector('[data-news-note]');
      if (note) note.textContent = 'მადლობა — მალე დაგიკავშირდებით.';
      form.reset();
    });
  });

  // FAQ accordion
  document.querySelectorAll('.guide-faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.guide-faq-item');
      var isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // Year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Journal filter
  var filterWrap = document.querySelector('[data-jfilter]');
  var grid = document.querySelector('[data-jgrid]');
  if (filterWrap && grid) {
    var chips = filterWrap.querySelectorAll('.jfilter__chip');
    function applyFilter(cat) {
      chips.forEach(function (c) { c.classList.toggle('is-active', c.getAttribute('data-cat') === cat); });
      grid.querySelectorAll('.jcard').forEach(function (card) {
        card.style.display = (cat === 'all' || card.getAttribute('data-cat') === cat) ? '' : 'none';
      });
    }
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () { applyFilter(chip.getAttribute('data-cat')); });
    });
    // deep-link: journal.html#immigration → activate that topic on load
    var valid = {};
    chips.forEach(function (c) { valid[c.getAttribute('data-cat')] = true; });
    function fromHash() {
      var h = (location.hash || '').replace('#', '');
      if (h && valid[h]) { applyFilter(h); }
    }
    fromHash();
    window.addEventListener('hashchange', fromHash);
  }
})();
