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

  // Newsletter → MailerLite (Journal Letters, group). Keeps the custom form design.
  var ML_ACCOUNT = '2490090';
  var ML_FORM = '192097670564676934';
  var mlIframe = null;
  function ensureMlIframe() {
    if (mlIframe) return;
    mlIframe = document.createElement('iframe');
    mlIframe.name = 'ml_newsletter_iframe';
    mlIframe.title = 'MailerLite';
    mlIframe.setAttribute('aria-hidden', 'true');
    mlIframe.style.display = 'none';
    document.body.appendChild(mlIframe);
  }
  document.querySelectorAll('[data-newsletter]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var email = input ? input.value.trim() : '';
      if (!email) return;
      ensureMlIframe();
      var hidden = document.createElement('form');
      hidden.action = 'https://assets.mailerlite.com/jsonp/' + ML_ACCOUNT + '/forms/' + ML_FORM + '/subscribe';
      hidden.method = 'post';
      hidden.target = 'ml_newsletter_iframe';
      hidden.style.display = 'none';
      var fe = document.createElement('input'); fe.type = 'text'; fe.name = 'fields[email]'; fe.value = email; hidden.appendChild(fe);
      var fs = document.createElement('input'); fs.type = 'hidden'; fs.name = 'ml-submit'; fs.value = '1'; hidden.appendChild(fs);
      var fa = document.createElement('input'); fa.type = 'hidden'; fa.name = 'anticsrf'; fa.value = 'true'; hidden.appendChild(fa);
      document.body.appendChild(hidden);
      hidden.submit();
      setTimeout(function () { hidden.remove(); }, 2000);
      var note = form.parentNode.querySelector('[data-news-note]');
      if (note) note.textContent = 'მადლობა! გთხოვთ, ელფოსტაზე მიღებული ბმულით დაადასტუროთ გამოწერა.';
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

  // Lightbox — click a photo to enlarge it, with prev/next navigation
  var lbSel = '.art-gallery__grid img, .art-fig img, .art-split__media img, .art-hero img, .hero-photo, .hero-portrait';
  if (document.querySelector(lbSel)) {
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML =
      '<button class="lightbox__close" aria-label="დახურვა">×</button>' +
      '<button class="lightbox__nav lightbox__nav--prev" aria-label="წინა">‹</button>' +
      '<img alt="">' +
      '<button class="lightbox__nav lightbox__nav--next" aria-label="შემდეგი">›</button>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector('img');
    var lbPrev = lb.querySelector('.lightbox__nav--prev');
    var lbNext = lb.querySelector('.lightbox__nav--next');
    var lbList = [], lbIdx = 0;
    function lbRender() {
      var img = lbList[lbIdx];
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || '';
      var many = lbList.length > 1;
      lbPrev.style.display = many ? '' : 'none';
      lbNext.style.display = many ? '' : 'none';
    }
    function lbGo(dir) {
      if (lbList.length < 2) return;
      lbIdx = (lbIdx + dir + lbList.length) % lbList.length;
      lbRender();
    }
    function lbClose() {
      lb.classList.remove('is-open');
      document.body.style.overflow = '';
      setTimeout(function () { if (!lb.classList.contains('is-open')) lbImg.removeAttribute('src'); }, 300);
    }
    function lbGroup(img) {
      var gal = img.closest('.art-gallery__grid');
      return Array.prototype.slice.call(gal ? gal.querySelectorAll('img') : document.querySelectorAll(lbSel));
    }
    function lbOpen(img) {
      lbList = lbGroup(img);
      lbIdx = Math.max(0, lbList.indexOf(img));
      lbRender();
      lb.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    lb.addEventListener('click', lbClose);
    lbImg.addEventListener('click', function (e) { e.stopPropagation(); });
    lbPrev.addEventListener('click', function (e) { e.stopPropagation(); lbGo(-1); });
    lbNext.addEventListener('click', function (e) { e.stopPropagation(); lbGo(1); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') lbClose();
      else if (e.key === 'ArrowLeft') lbGo(-1);
      else if (e.key === 'ArrowRight') lbGo(1);
    });
    document.addEventListener('click', function (e) {
      var t = e.target;
      if (!t || t.tagName !== 'IMG') return;
      if (t.closest('.lightbox')) return;
      if (!t.matches(lbSel)) return;
      e.preventDefault();
      lbOpen(t);
    });
  }
})();
