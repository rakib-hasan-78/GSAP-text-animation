const tl = gsap.timeline({defaults:{duration:.75, ease:"power3.out",},});
tl.fromTo('.custom-design',
     {scale:1.3, borderRadius:"0rem"}, 
     {  
         scale:1,
         borderRadius:"15px",
         delay:.35, 
         duration:2.5, 
         ease: "elastic.out(1.5, 1)"
        });
tl.fromTo('.cta-1', {x:"100%", opacity:1}, {x:0, opacity:1},"<20%");
tl.fromTo('.cta-2', {y:"100%", opacity:1}, {y:0, opacity:1},"<20%");
tl.fromTo('.cta-3', {x:"-100%", opacity:1}, {x:0, opacity:1},"<20%");
tl.fromTo('.cta-4', {y:"100%", opacity:1}, {y:0, opacity:1},"<20%");
tl.fromTo('.cta-5', {x:"100%", opacity:1}, {x:0, opacity:1},"<20%");
tl.fromTo('.cta-6', {y:"100%", opacity:1}, {y:0, opacity:1},"<20%");
tl.fromTo('.cta-7', {x:"-100%", opacity:1}, {x:0, opacity:1},"<20%");
tl.fromTo('.btn-custom', {y:20, opacity:0},{y:0, opacity:1},'<');

// ** nav animation----->

const logo = document.querySelector('h1');
const letters = logo.textContent.split('');
logo.innerHTML =''
letters.forEach(letter=>{
    logo.innerHTML += `<span class="letter">${letter}</span>`
});
gsap.set('.letter', {display:'inline-block'})
gsap.fromTo('.letter', {y:'100%', opacity:0}, {y:0, opacity:1, delay:2, stagger:.06, ease:"back.out(3)"})
