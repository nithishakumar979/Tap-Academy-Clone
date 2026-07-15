/* ═══════════════════════════════════════════════════════
   TAP ACADEMY – MAIN JS
   Header scroll, particles, counters, reveal animations
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ── SIGN IN ───────────────────────────────────────── */
function handleSignIn(e) {
  e.preventDefault();
  const screen = document.getElementById('signin-screen');
  if (screen) {
    screen.classList.add('hidden');
    document.body.classList.remove('show-signin');
  }
}

function showSignIn() {
  const screen = document.getElementById('signin-screen');
  if (screen) {
    screen.classList.remove('hidden');
    document.body.classList.add('show-signin');
  }
}
/* ── STICKY HEADER ─────────────────────────────────── */
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ── HAMBURGER MENU ────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });
  // Close on nav link click
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
    }
  });
}

/* ── SMOOTH SCROLL ─────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── HERO PARTICLES ────────────────────────────────── */
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  const colors = ['#ff6b35', '#00d4ff', '#a78bfa', '#43e97b', '#ffd700'];
  const count = window.innerWidth < 768 ? 20 : 45;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 4 + 2;
    const x = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 10;
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${x}%;
      background:${color};
      animation-duration:${duration}s;
      animation-delay:${delay}s;
      box-shadow: 0 0 ${size * 2}px ${color};
    `;
    container.appendChild(p);
  }
}
initParticles();

/* ── COUNTER ANIMATION ─────────────────────────────── */
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;
    let current = 0;
    const increment = target / 80;
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      el.textContent = Math.floor(current).toLocaleString();
      if (current >= target) clearInterval(timer);
    }, 20);
  });
}

/* ── INTERSECTION OBSERVER (REVEAL + COUNTERS) ─────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 6) * 0.08}s`;
  revealObserver.observe(el);
});

// Counter trigger
const heroSection = document.querySelector('.hero');
if (heroSection) {
  const counterObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      counterObserver.disconnect();
    }
  }, { threshold: 0.3 });
  counterObserver.observe(heroSection);
}

/* ── SKILL BAR ANIMATION ───────────────────────────── */
function animateSkillBars() {
  document.querySelectorAll('.sb-fill').forEach(bar => {
    const width = bar.getAttribute('data-width');
    if (width) bar.style.width = width + '%';
  });
}
const skillObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateSkillBars();
    skillObserver.disconnect();
  }
}, { threshold: 0.3 });
const skillSection = document.getElementById('skills-section');
if (skillSection) skillObserver.observe(skillSection);

/* ── SKILL TABS (HIRE PAGE) ────────────────────────── */
document.querySelectorAll('.skill-tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const cat = this.getAttribute('data-skillcat');
    document.querySelectorAll('.skill-tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.skills-cat').forEach(c => c.classList.remove('active'));
    const target = document.getElementById('skillcat-' + cat);
    if (target) {
      target.classList.add('active');
      // Re-animate bars
      target.querySelectorAll('.sb-fill').forEach(bar => {
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = (bar.getAttribute('data-width') || 0) + '%';
        }, 100);
      });
    }
  });
});

/* ── COURSE TABS ───────────────────────────────────── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const tab = this.getAttribute('data-tab');
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    const content = document.getElementById('tab-' + tab + '-content');
    if (content) content.classList.add('active');
  });
});

/* ── FORM SUBMIT (Hire page) ───────────────────────── */
function submitHireForm(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-hire-btn');
  if (btn) {
    btn.textContent = '✅ Request Sent!';
    btn.style.background = 'linear-gradient(135deg, #43e97b, #38f9d7)';
  }
  setTimeout(() => {
    e.target.reset();
    if (btn) {
      btn.textContent = 'Send Hiring Request ✈';
      btn.style.background = '';
    }
  }, 3000);
}

/* ── ENROLL FORM ───────────────────────────────────── */
function submitEnroll(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-enroll-btn');
  if (btn) {
    btn.innerHTML = '<i class="fas fa-check-circle"></i> Enrolled! We\'ll contact you soon.';
    btn.style.background = 'linear-gradient(135deg, #43e97b, #38f9d7)';
  }
  setTimeout(() => {
    e.target.reset();
    if (btn) {
      btn.innerHTML = 'Enroll Now <i class="fas fa-rocket"></i>';
      btn.style.background = '';
    }
  }, 4000);
}

/* ── BACK TO TOP BUTTON ────────────────────────────── */
function addBackToTop() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  btn.setAttribute('aria-label', 'Back to top');
  btn.style.cssText = `
    position:fixed;bottom:32px;right:32px;z-index:999;
    width:48px;height:48px;border-radius:50%;
    background:linear-gradient(135deg,#ff6b35,#ff9f55);
    border:none;color:#fff;font-size:1.1rem;
    cursor:pointer;opacity:0;transform:translateY(16px) scale(0.8);
    transition:all 0.3s ease;box-shadow:0 4px 16px rgba(255,107,53,0.4);
    display:flex;align-items:center;justify-content:center;
  `;
  document.body.appendChild(btn);
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => {
    const show = window.scrollY > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.transform = show ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.8)';
    btn.style.pointerEvents = show ? 'auto' : 'none';
  }, { passive: true });
}
addBackToTop();

/* ── ACTIVE NAV ON SCROLL ──────────────────────────── */
(function highlightNavOnPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
