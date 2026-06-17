/* Tamari & Léo — shared behaviour (all directions) */
(function () {
  // Nav: transparent over hero → solid on scroll
  var nav = document.querySelector('[data-nav]');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > window.innerHeight * 0.72 - 80) nav.classList.add('scrolled');
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

  // Year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
