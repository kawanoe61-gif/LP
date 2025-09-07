// Navigation (mobile)
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    if (nav) {
      nav.style.display = expanded ? 'none' : 'flex';
      if (!expanded) nav.style.flexDirection = 'column';
    }
  });
}

// Smooth scroll for internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Footer year
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// CTA links (set your real links here)
const LINE_URL = 'https://lin.ee/NdqnivKm'; // 指定のLINE URL
const TEL_NUMBER = '080-0000-0000'; // TODO: 実番号に変更
const FORM_URL = 'https://docs.google.com/forms/d/e/xxxxxxxxxxxxxxxxxxxx/viewform'; // TODO: 実URLに変更
const IG_URL = 'https://www.instagram.com/restart__children?igsh=aXIwOXY4ZTZtbnJ5'; // Instagram

const lineLink = document.getElementById('lineLink');
const callLink = document.getElementById('callLink');
const formLink = document.getElementById('formLink');
if (lineLink) lineLink.href = LINE_URL;
if (callLink) callLink.href = `tel:${TEL_NUMBER}`;
if (formLink) formLink.href = FORM_URL;

// Instagram links
const igLinkNav = document.getElementById('igLinkNav');
const igLinkFooter = document.getElementById('igLinkFooter');
const igButton = document.getElementById('igButton');
[igLinkNav, igLinkFooter, igButton].forEach(el => {
  if (el) {
    el.href = IG_URL;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  }
});

// Voices slider
(function initVoicesSlider() {
  const track = document.getElementById('voicesTrack');
  if (!track) return;

  const prevBtn = document.querySelector('#voices .prev');
  const nextBtn = document.querySelector('#voices .next');
  const slides = Array.from(track.children);
  let current = 0;

  const clamp = (n, min, max) => Math.max(min, Math.min(n, max));
  const scrollToIndex = (i) => {
    current = clamp(i, 0, slides.length - 1);
    const x = slides[current].offsetLeft;
    track.scrollTo({ left: x, behavior: 'smooth' });
    updateButtons();
  };

  const updateButtons = () => {
    if (prevBtn) prevBtn.disabled = current <= 0;
    if (nextBtn) nextBtn.disabled = current >= slides.length - 1;
  };

  if (prevBtn) prevBtn.addEventListener('click', () => scrollToIndex(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => scrollToIndex(current + 1));

  // Sync current index on manual scroll
  let scrollTimeout;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const mid = track.scrollLeft + track.clientWidth / 2;
      let nearest = 0;
      let dist = Infinity;
      slides.forEach((s, idx) => {
        const center = s.offsetLeft + s.clientWidth / 2;
        const d = Math.abs(center - mid);
        if (d < dist) { dist = d; nearest = idx; }
      });
      current = nearest;
      updateButtons();
    }, 80);
  }, { passive: true });

  // Keyboard navigation when focused in section
  const voicesSection = document.getElementById('voices');
  if (voicesSection) {
    voicesSection.tabIndex = 0;
    voicesSection.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); scrollToIndex(current - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); scrollToIndex(current + 1); }
    });
  }

  // Basic swipe (touch)
  let startX = 0;
  track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) scrollToIndex(current + 1); else scrollToIndex(current - 1);
    }
  });

  // Init
  updateButtons();
})();
