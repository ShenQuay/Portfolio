
document.addEventListener("DOMContentLoaded", function() {

	document.querySelector('.hamburger').addEventListener("click", function() {
		this.classList.toggle("hamburger--active");
		document.querySelector(".nav-fullscreen").classList.toggle("nav-fullscreen--open");
	});
	
});

var playing = false;

tl = new TimelineMax({paused: true, onComplete: function(){ playing = false;} });
tl.from('.anim1', {opacity: 0, rotation: 25, duration: 0.7, y: +500, ease: 'Power4.easeInOut'})

document.getElementById("hamburger").addEventListener("click", playTL );

function playTL(){
  if( !playing ){
    playing = true;
    tl.progress(0).play();
  }
}

document.addEventListener("DOMContentLoaded", function() {

	document.querySelector('.nav-fullscreen__items').addEventListener("click", function() {
		document.querySelector(".nav-fullscreen").classList.toggle("nav-fullscreen--open");
	});
	
});

