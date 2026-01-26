// Small, dependency-free UI enhancements for CHINA JOLLITY STUDIO
document.addEventListener('DOMContentLoaded', function () {
  // Typewriter for hero title
  (function typewriter(){
    const el = document.querySelector('.site-hero .display-4');
    if (!el) return;
    const text = el.textContent.trim();
    el.textContent = '';
    let i = 0;
    const speed = 80;
    function step(){
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++; setTimeout(step, speed);
      }
    }
    step();
  })();

  // Simple reveal on scroll
  (function revealOnScroll(){
    const items = document.querySelectorAll('.card, .p-4, .p-3');
    if (!('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if (e.isIntersecting) {
          e.target.classList.add('reveal-visible');
          obs.unobserve(e.target);
        }
      });
    }, {threshold: 0.15});
    items.forEach(i=>{ i.classList.add('reveal-hidden'); obs.observe(i); });
  })();

  // Smooth scroll for internal links
  (function smoothScroll(){
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        e.preventDefault();
        const id = this.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({behavior:'smooth'});
      });
    });
  })();
});
