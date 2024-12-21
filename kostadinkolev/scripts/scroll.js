// import { gsap } from "./gsap/dist/gsap";
    
// import { ScrollTrigger } from "./gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: '+=1000%',
    // snap: 5,
//     snap: 1 / (sections.length),
//     end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});

ScrollTrigger.config({
        // default is "resize,visibilitychange,DOMContentLoaded,load" so we can remove "resize" from the list:
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
});