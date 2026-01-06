gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".divPai",
        start: "0% 0%",
        end: "+=2000",
        pin: true,
        scrub: 2,
    }
})

tl.to(".box", {
    borderRadius: 80
})

tl.to(".box", {
    rotate: 200,
    x: 500,
    y: 30,
})