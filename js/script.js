gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.project', {
    x: '-50%',
    opacity: 0
})