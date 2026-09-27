
const nav=document.querySelector('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
const form=document.querySelector('#lead');
form.addEventListener('submit',e=>{
 e.preventDefault();
 const name=document.querySelector('#name').value;
 const phone=document.querySelector('#phone').value;
 const msg=document.querySelector('#msg').value;
 const wa=form.dataset.wa;
 const text=encodeURIComponent(`Hello, I'd like to enquire. Name: ${name}. Phone: ${phone}. Message: ${msg}`);
 window.open(`https://wa.me/${wa}?text=${text}`,'_blank');
});
