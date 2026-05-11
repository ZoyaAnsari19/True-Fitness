/* True Fitness interactions (vanilla) */
(function () {
  'use strict';

  // Mobile menu toggle
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // Navbar scrolled state
  var navbar = document.getElementById('navbar');
  function onScroll() {
    if (!navbar) return;
    if (window.scrollY > 16) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal animations
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // Testimonials controls (simple scroll)
  var track = document.getElementById('testiTrack');
  var prev = document.getElementById('testiPrev');
  var next = document.getElementById('testiNext');
  if (track && prev && next) {
    var scrollBy = function (dir) {
      var w = track.clientWidth;
      track.scrollBy({ left: dir * Math.max(280, Math.floor(w * 0.75)), behavior: 'smooth' });
    };
    prev.addEventListener('click', function () {
      scrollBy(-1);
    });
    next.addEventListener('click', function () {
      scrollBy(1);
    });
  }

  // Contact form demo (no backend)
  var contactForm = document.getElementById('contactForm');
  var status = document.getElementById('cf-status');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (status) status.textContent = 'Thanks! We will contact you soon.';
      contactForm.reset();
    });
  }
})();

