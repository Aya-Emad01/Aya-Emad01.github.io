const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('[data-count]').forEach(el=>{
  const t=+el.dataset.count,s=el.dataset.suffix||'';let st=null;
  const go=ts=>{st=st||ts;const p=Math.min((ts-st)/1400,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(go)};
  requestAnimationFrame(go);
});
const bar=document.getElementById('progress');
addEventListener('scroll',()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
document.querySelectorAll('.tilt').forEach(el=>{
  el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-4px)`;});
  el.addEventListener('mouseleave',()=>el.style.transform='');
});
