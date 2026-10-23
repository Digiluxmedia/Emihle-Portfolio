
const menu=document.querySelector('.menu'),links=document.querySelector('.navlinks');
if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu'});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'}))}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
if('IntersectionObserver' in window){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('show'))}
