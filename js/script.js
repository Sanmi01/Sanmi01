gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.left-project', {
    x: '-70%',
    opacity: 0,
    duration: 2,
    ease: Power2.easeOut
})

tl.from('.right-project', {
    x: '70%',
    opacity: 0,
    duration: 2,
    ease: Power2.easeOut
}, "-=2")