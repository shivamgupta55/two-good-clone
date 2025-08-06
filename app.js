let videoCont = document.querySelector(".video-container");
let playbtn = document.querySelector(".cursor");

videoCont.addEventListener("mouseenter",()=>{
    gsap.to(playbtn,{
        opacity:1,
        scale:1
    })
})

videoCont.addEventListener("mouseleave",()=>{
    gsap.to(playbtn,{
        opacity:0,
        scale:0
    })
});

videoCont.addEventListener("mousemove",(details)=>{
    gsap.to(playbtn,{
        left:details.x-120 ,
        top:details.y-120
    })
});

gsap.from(".heading h1",{
    y:80,
    delay:0.5,
    duration:0.8,
    stagger:0.3,
    opacity:0
});
gsap.from(".heading .video-container",{
    scale:0.9,
    delay:1.4,
    duration:0.5,
    opacity:0

});

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

document.addEventListener("mousemove",function(details){
    gsap.to(".cursor-yellow",{
        left:details.x,
        top:details.y
    })
});
let move = document.querySelector(".image-section");
let yellow = document.querySelector(".cursor-yellow");
move.addEventListener("mouseenter",function(){
   gsap.to(yellow,{
        opacity:1,
        scale:1
        
    })
})