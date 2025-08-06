// ======= Video Cursor Animation =======
const videoCont = document.querySelector(".video-container");
const playBtn = document.querySelector(".cursor");

if (videoCont && playBtn) {
    videoCont.addEventListener("mouseenter", () => {
        gsap.to(playBtn, { opacity: 1, scale: 1 });
    });

    videoCont.addEventListener("mouseleave", () => {
        gsap.to(playBtn, { opacity: 0, scale: 0 });
    });

    videoCont.addEventListener("mousemove", (e) => {
        gsap.to(playBtn, {
            left: e.x - 120,
            top: e.y - 120
        });
    });
}

// ======= Heading & Video GSAP Animation =======
gsap.from(".heading h1", {
    y: 80,
    delay: 0.5,
    duration: 0.8,
    stagger: 0.3,
    opacity: 0
});

gsap.from(".heading .video-container", {
    scale: 0.9,
    delay: 1.4,
    duration: 0.5,
    opacity: 0
});

// ======= Locomotive Scroll Initialization =======
const mainEl = document.querySelector('.main');
if (mainEl) {
    new LocomotiveScroll({
        el: mainEl,
        smooth: true
    });
}

// ======= Cursor Yellow Animation =======
const cursorYellow = document.querySelector(".cursor-yellow");
document.addEventListener("mousemove", (e) => {
    if (cursorYellow) {
        gsap.to(cursorYellow, {
            left: e.x,
            top: e.y
        });
    }
});

const imageSection = document.querySelector(".image-section");
if (imageSection && cursorYellow) {
    imageSection.addEventListener("mouseenter", () => {
        gsap.to(cursorYellow, {
            opacity: 1,
            scale: 1
        });
    });
}
    imageSection.addEventListener("mouseleave", () => {
        gsap.to(cursorYellow, {
            opacity: 0,
            scale: 0
        });
    });