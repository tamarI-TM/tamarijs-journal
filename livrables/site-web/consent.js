/* Tamari's Journal — consent gate for marketing/advertising trackers (Meta Pixel).
   Storage: localStorage key "tj_consent_v1" -> {"status":"granted"|"denied","ts":"<ISO date>"}.
   Meta Pixel (fbevents.js) is only requested from the network after status === "granted". */
(function () {
  'use strict';

  var STORAGE_KEY = 'tj_consent_v1';
  var PIXEL_ID = '1815585352939341';
  var pixelState = 'idle'; /* idle -> loading -> loaded, guards against double init/PageView */
  var bannerEl = null;

  function readConsent() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (data && (data.status === 'granted' || data.status === 'denied')) return data;
    } catch (e) {}
    return null;
  }

  function writeConsent(status) {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ status: status, ts: new Date().toISOString() })
      );
    } catch (e) {}
  }

  var META_COOKIE_NAMES = ['_fbp', '_fbc'];

  function deleteCookie(name) {
    var host = window.location.hostname;
    var paths = ['/', window.location.pathname];
    var domains = ['', host, '.' + host];
    var parts = host.split('.');
    if (parts.length > 2) domains.push('.' + parts.slice(-2).join('.'));
    var expired = '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    for (var i = 0; i < paths.length; i++) {
      for (var j = 0; j < domains.length; j++) {
        var cookieStr = name + '=' + expired + '; path=' + paths[i];
        if (domains[j]) cookieStr += '; domain=' + domains[j];
        document.cookie = cookieStr;
      }
    }
  }

  function clearMetaCookies() {
    try {
      for (var i = 0; i < META_COOKIE_NAMES.length; i++) deleteCookie(META_COOKIE_NAMES[i]);
    } catch (e) {}
  }

  function loadMetaPixel() {
    if (pixelState !== 'idle') return;
    pixelState = 'loading';
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
    pixelState = 'loaded';
  }

  function buildBanner() {
    if (bannerEl) return bannerEl;
    var el = document.createElement('div');
    el.id = 'tj-consent';
    el.className = 'tj-consent';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-label', 'ქუქი-ფაილების მართვა');
    el.innerHTML =
      '<div class="tj-consent__box">' +
        '<p class="tj-consent__text">საიტი იყენებს აუცილებელ ქუქი-ფაილებს გამართული მუშაობისთვის და, თქვენი თანხმობით, მარკეტინგულ ქუქი-ფაილებს (Meta Pixel) რეკლამის გასაზომად. თანხმობის გარეშე მარკეტინგული ტრეკერები არ ჩაირთვება. არჩევანის შეცვლა შესაძლებელია ნებისმიერ დროს, ფუტერის „Gérer les cookies" ბმულით.</p>' +
        '<div class="tj-consent__actions">' +
          '<button type="button" class="tj-consent__btn tj-consent__btn--refuse" data-tj="refuse">Tout refuser</button>' +
          '<button type="button" class="tj-consent__btn tj-consent__btn--accept" data-tj="accept">Tout accepter</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(el);
    el.addEventListener('click', function (ev) {
      var action = ev.target && ev.target.getAttribute && ev.target.getAttribute('data-tj');
      if (action === 'accept') {
        writeConsent('granted');
        loadMetaPixel();
        hideBanner();
      } else if (action === 'refuse') {
        var wasLoaded = pixelState !== 'idle';
        writeConsent('denied');
        if (wasLoaded) {
          clearMetaCookies();
          window.location.reload();
        } else {
          hideBanner();
        }
      }
    });
    bannerEl = el;
    return el;
  }

  function showBanner() {
    buildBanner().classList.add('is-open');
  }

  function hideBanner() {
    if (bannerEl) bannerEl.classList.remove('is-open');
  }

  function injectFooterLink() {
    var groups = document.querySelectorAll('.footer__legal');
    for (var i = 0; i < groups.length; i++) {
      var g = groups[i];
      if (g.querySelector('[data-tj-manage]')) continue;
      var a = document.createElement('a');
      a.href = '#';
      a.setAttribute('data-tj-manage', '');
      a.textContent = 'Gérer les cookies';
      a.addEventListener('click', function (ev) {
        ev.preventDefault();
        showBanner();
      });
      g.appendChild(a);
    }
  }

  function init() {
    injectFooterLink();
    var consent = readConsent();
    if (consent && consent.status === 'granted') {
      loadMetaPixel();
      return;
    }
    if (consent && consent.status === 'denied') {
      return;
    }
    showBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
