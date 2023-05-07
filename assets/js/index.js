var tl = gsap.timeline()
tl.from('body', {backgroundColor: "#000000", duration: 2, ease: 'Power4.easeInOut'})
  .to('.slogan', {autoAlpha:0}, "-=1")
  .from('.logo', {opacity: 0, duration: 1, y: +250, ease: 'Power4.easeInOut'}, "-=1")
  .from('.octo-logo', {opacity: 0, duration: 1.5, y: +50,  ease: 'Power4.easeInOut'}, "-=1")
  .from('#hamburger', {opacity: 0, duration: 1, y: -50, ease: 'Power4.easeInOut'}, "-=1")
  .from('.scroll', {opacity: 0, duration: 1, y: +50, ease: 'Power4.easeInOut'}, "-=0.5")
  

$(function(){
  setTimeout(function(){
    $('html, body')
    .css({
      'overflow': 'auto'
    })
    .animate({
      scrollTop: $('.myDiv').offset().top
    }, 2000);
  }, 2000);
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

gsap.registerPlugin(ScrollTrigger);

gsap.to("#all", {
  scrollTrigger: {
  trigger: "#home",
  start: "bottom bottom",
  end: "bottom top",
  toggleActions: "play none none reverse",
  },
  backgroundColor: "#000000",
  duration: 0.3
});

gsap.to("#home", {
  scrollTrigger: {
  trigger: "#home",
  start: "bottom bottom",
  end: "bottom top",
  toggleActions: "play none none reverse",
  },
  autoAlpha: 0,
  duration: 0.3
});




