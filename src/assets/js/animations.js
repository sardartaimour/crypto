// Home animations
$(document).ready(function (){
	$('.count').each(function () {
	  $(this).prop('Counter', 0).animate({
		  Counter: $(this).text()
	  }, {
		  duration: 10000,
		  easing: 'swing',
		  step: function (now) {
			  $(this).text(Math.ceil(now));
		  }
	  });
	});
	$(".home-features").fadeIn(5000);

	/*===== SCROLL REVEAL ANIMATION =====*/
	const sr = ScrollReveal({
		origin: 'top',
		distance: '80px',
		duration: 2000,
		reset: true
	});

	/*SCROLL Home*/
	sr.reveal('.hero-home',{}); 
	sr.reveal('.hero-home-wrap-text',{delay: 200});
	sr.reveal('.button.dark-button',{delay: 200});
	sr.reveal('#hero-img',{delay: 200});
	sr.reveal('.button.outline-button',{delay: 200}); 
	
	/*SCROLL Base*/
	sr.reveal('.view-design-left',{}); 
	sr.reveal('.design.app-design',{delay: 400}); 
	sr.reveal('.design.graphic-design',{delay: 400});
	
	/*SCROLL Team*/
	sr.reveal('.home-feature.one',{}); 
	sr.reveal('.home-feature.two',{delay: 400}); 
	sr.reveal('.home-feature.three',{delay: 400});

	/*SCROLL Packages*/
	sr.reveal('.designs',{interval: 200});

	/*SCROLL About*/
	sr.reveal('.hero-about',{}); 
	sr.reveal('.hero-about-wrap-text',{delay: 200});

	/*SCROLL Talent*/
	sr.reveal('.about-talent',{}); 
	sr.reveal('.about-world-talent',{delay: 200});
	sr.reveal('.about-talent-wrap-text',{delay: 200});

	/*SCROLL Form*/
	sr.reveal('.contact-us',{}); 
	sr.reveal('.contact-us-text',{delay: 200});
	sr.reveal('footer',{interval: 200});

	/*SCROLL contact*/
	sr.reveal('.talk-about',{interval: 200}); 

	/*SCROLL login*/
	sr.reveal('.panel.left-panel',{});
	
	/*SCROLL dashboard*/
	sr.reveal('.heading',{}); 
	sr.reveal('.social',{delay: 400});
});