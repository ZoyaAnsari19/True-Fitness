/* True Fitness — Interactions */
(() => {
  'use strict';

  // ============================================
  // Sticky Navbar Effect
  // ============================================
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 24) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ============================================
  // Mobile Menu Toggle
  // ============================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Reveal on scroll: handled by src/components/RevealOnScroll.tsx so it re-runs after
  // Next.js client navigation (app.js only loads once).

  // ============================================
  // Animated Counters (data-count)
  // ============================================
  const counters = document.querySelectorAll('[data-count]');
  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const duration = 1600;
    const start = performance.now();
    const startVal = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.floor(startVal + (target - startVal) * eased);
      el.textContent = val.toLocaleString();
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCount(e.target);
          co.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(el => co.observe(el));
  }

  // ============================================
  // Smooth Anchor Scroll with Offset
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  // ============================================
  // Testimonials Slider
  // ============================================
  const row = document.getElementById('testiRow');
  const prev = document.getElementById('testiPrev');
  const next = document.getElementById('testiNext');
  if (row && prev && next) {
    let index = 0;
    const getCardsPerView = () => {
      const w = window.innerWidth;
      if (w < 640) return 1;
      if (w < 980) return 2;
      return 3;
    };
    const totalCards = row.children.length;
    const update = () => {
      const cardsPerView = getCardsPerView();
      const maxIndex = Math.max(0, totalCards - cardsPerView);
      if (index > maxIndex) index = maxIndex;
      if (index < 0) index = 0;
      const card = row.children[0];
      const style = window.getComputedStyle(row);
      const gap = parseFloat(style.columnGap || style.gap || '22');
      const cardWidth = card.getBoundingClientRect().width + gap;
      row.style.transform = `translateX(-${index * cardWidth}px)`;
    };
    next.addEventListener('click', () => {
      const cardsPerView = getCardsPerView();
      const maxIndex = Math.max(0, totalCards - cardsPerView);
      index = (index + 1 > maxIndex) ? 0 : index + 1;
      update();
    });
    prev.addEventListener('click', () => {
      const cardsPerView = getCardsPerView();
      const maxIndex = Math.max(0, totalCards - cardsPerView);
      index = (index - 1 < 0) ? maxIndex : index - 1;
      update();
    });
    window.addEventListener('resize', update);
    // Auto-slide
    let auto = setInterval(() => next.click(), 5500);
    const track = document.getElementById('testiTrack');
    if (track) {
      track.addEventListener('mouseenter', () => clearInterval(auto));
      track.addEventListener('mouseleave', () => { auto = setInterval(() => next.click(), 5500); });
    }
    update();
  }

  // ============================================
  // Contact Form Handling
  // ============================================
  const form = document.getElementById('contactForm');
  const status = document.getElementById('cf-status');
  if (form) {
    // Make labels work without placeholder
    form.querySelectorAll('input, textarea').forEach(input => {
      input.setAttribute('placeholder', ' ');
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const phone = document.getElementById('cf-phone').value.trim();
      const message = document.getElementById('cf-message').value.trim();
      if (!name || !email || !phone || !message) {
        if (status) {
          status.style.color = '#ff6b8a';
          status.textContent = 'Please fill in all fields.';
        }
        return;
      }
      const emailRe = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRe.test(email)) {
        if (status) {
          status.style.color = '#ff6b8a';
          status.textContent = 'Please enter a valid email address.';
        }
        return;
      }
      if (status) {
        status.style.color = '';
        status.textContent = '✓ Thank you! Your message has been sent. We\'ll be in touch within 24 hours.';
      }
      form.reset();
      setTimeout(() => { if (status) status.textContent = ''; }, 6000);
    });
  }

  // ============================================
  // Light Parallax on Hero Visual
  // ============================================
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual && window.matchMedia('(pointer: fine)').matches) {
    const cards = heroVisual.querySelectorAll('.hero-card');
    heroVisual.addEventListener('mousemove', (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cards.forEach((card, i) => {
        const factor = (i + 1) * 6;
        card.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    });
    heroVisual.addEventListener('mouseleave', () => {
      cards.forEach(card => { card.style.transform = ''; });
    });
  }

  // ============================================
  // Active Nav Link on Scroll
  // ============================================
  const sections = ['about', 'features', 'membership', 'tracking', 'testimonials', 'contact'];
  const navAnchors = document.querySelectorAll('.nav-links a');
  const setActive = () => {
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) current = id;
      }
    });
    navAnchors.forEach(a => {
      const href = a.getAttribute('href') || '';
      a.classList.toggle('active', href === `#${current}`);
    });
  };
  window.addEventListener('scroll', setActive, { passive: true });

})();

