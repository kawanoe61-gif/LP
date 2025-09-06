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
