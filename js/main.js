document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.current-year').forEach((el) => { el.textContent = new Date().getFullYear(); });
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('open', !open); });
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d'); let width; let height; let particles = []; let mouse = { x: 0, y: 0 };
  const resize = () => { width = canvas.width = canvas.offsetWidth * devicePixelRatio; height = canvas.height = canvas.offsetHeight * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); width = canvas.offsetWidth; height = canvas.offsetHeight; particles = Array.from({ length: Math.min(85, Math.floor(width / 14)) }, () => ({ x: Math.random() * width, y: Math.random() * height, r: Math.random() * 1.6 + .3, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18 })); };
  const draw = () => { ctx.clearRect(0, 0, width, height); particles.forEach((p, i) => { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > width) p.vx *= -1; if (p.y < 0 || p.y > height) p.vy *= -1; const dx = mouse.x - p.x; const dy = mouse.y - p.y; const distance = Math.sqrt(dx * dx + dy * dy); if (distance < 180) { p.x -= dx * .0008; p.y -= dy * .0008; } ctx.fillStyle = i % 5 === 0 ? 'rgba(0,229,255,.8)' : 'rgba(160,160,176,.3)'; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); }); requestAnimationFrame(draw); };
  window.addEventListener('resize', resize); window.addEventListener('pointermove', (event) => { mouse.x = event.clientX; mouse.y = event.clientY; }); resize(); draw();
});
