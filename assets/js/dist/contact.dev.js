"use strict";

gsap.registerPlugin(ScrollTrigger);
gsap.to(".philosophy, #contact", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top center",
    end: "center top",
    toggleActions: "play none none reverse"
  },
  backgroundColor: "#000000",
  duration: 0.3
});
gsap.to(".contact-heading", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top center",
    end: "center top",
    toggleActions: "play none none reverse"
  },
  opacity: 1,
  y: -150,
  duration: 0.5,
  ease: 'Power2.easeInOut'
});
gsap.to(".contact-list", {
  scrollTrigger: {
    trigger: ".contact-list",
    start: "top bottom",
    end: "center top",
    toggleActions: "play none none reverse"
  },
  opacity: 1,
  y: -150,
  duration: 0.5,
  ease: 'Power2.easeInOut'
});