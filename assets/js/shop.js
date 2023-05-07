gsap.registerPlugin(ScrollTrigger);

let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"),
    clamp = gsap.utils.clamp(-10, 10);

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power4", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});


gsap.to(".shop-elements", {
  scrollTrigger: {
  trigger: ".kb1",
  start: "top bottom",
  end: "bottom top",
  toggleActions: "play none none reverse",
  },
  autoAlpha: 0,
  duration: 0.3
});


gsap.to("#shop, #about", {
  scrollTrigger: {
  trigger: ".kb1",
  start: "top bottom",
  end: "bottom top",
  toggleActions: "play none none reverse",
  },
  backgroundColor: "#FFFFFF",
  duration: 0.3
});


var links = $(".shop-elements li");

links.on("mouseover",function(){
	var url = $(this).attr("data-background");
	$(".shop-elements-background").css("backgroundImage","url("+url+")");
});

links.on("mouseout",function(){
	var url = $(this).attr("data-background");
	$(".shop-elements-background").css("backgroundImage","url('')");
});



