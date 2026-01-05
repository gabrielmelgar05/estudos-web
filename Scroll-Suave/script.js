gsap.registerPlugin(ScrollTrigger);

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
	smooth: 1, // Rolagem suave para -> PC
    smoothTouch: 0, // Rolagem suave para -> Mobile
	effects: true // Ativa os efeitos de parallax e scrol
});

gsap.to("h1", {
    y: 500,
    scroolTrigger: {
        trigger: ".divPai",
        start: "0% 0%",
        end: "100% 0%",
        scrub: true
    }
})