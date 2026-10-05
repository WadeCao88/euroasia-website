// mobile nav toggle + footer year + scroll reveal
document.addEventListener('DOMContentLoaded', function () {
  var t = document.querySelector('.nav-toggle');
  var n = document.querySelector('.nav');
  if (t && n) t.addEventListener('click', function () { n.classList.toggle('open'); });
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  /* safety: never leave content hidden */
  setTimeout(function () { document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); }); }, 3500);
});
