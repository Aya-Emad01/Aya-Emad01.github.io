const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');if(e.target.dataset.n)cnt(e.target);io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv,.stat').forEach(e=>{e.classList.add('rv');io.observe(e)});
function cnt(el){const b=el.querySelector('b');if(!b||b.dataset.d)return;b.dataset.d=1;const n=+b.dataset.nn,s=b.dataset.s||'',t=performance.now();(function f(x){const p=Math.min(1,(x-t)/1600),v=Math.round(n*(1-Math.pow(1-p,4)));b.textContent=v+s;if(p<1)requestAnimationFrame(f)})(t)}
document.querySelectorAll('.stat').forEach(s=>{s.dataset.n=1});
const pr=document.getElementById('prog'),rg=document.getElementById('ridge');
addEventListener('scroll',()=>{const h=document.documentElement;pr.style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+'%';rg.style.transform='translateY('+(scrollY*.35)+'px)';rg.style.opacity=Math.max(0,1-scrollY/innerHeight*1.1)},{passive:true});
