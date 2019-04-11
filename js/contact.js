
(() => {

	let 	hamburger			= document.querySelector('.hamburger'),
			mainNav 			= document.querySelector('#mainNav'),
			mainHeaderCon		= document.querySelector('#mainHeaderCon'),
			mainHeader			= document.querySelector('#mainHeader'), 
			mediaQuery1 		= window.matchMedia('(min-width: 768px)'),
			btnDownHero			= document.querySelectorAll('.downArrow'),
			closeContactRemind	= document.querySelector('#close'),
			contactRemind 		= document.querySelector('#announcement'),
	 	 	scrollTop = 0,
			counter   = 0;
			

  	//functions
  
	function hamburgerMenu() {
		mainNav.classList.toggle('slideToggle');
		hamburger.classList.toggle('expanded');
	}

	window.onscroll = function(){
		var pageScroll = window.pageYOffset;  

		if (pageScroll > scrollTop && mediaQuery1.matches){
			mainHeader.style.top = '-100%';
			mainHeaderCon.style.top = '-100%';
		}
		else if (pageScroll === 0 && mediaQuery1.matches) {
			mainHeader.style.top = '0';
			mainHeaderCon.style.top = '52px';
		}
		else {
			mainHeaderCon.style.top = '0';
		}
	   scrollTop = pageScroll;
	}

	function skipHero(e) {
		e.preventDefault;
		if (mediaQuery1.matches) {
			TweenLite.to(window, 1, {scrollTo:{y:740}});
		}
		else {
			TweenLite.to(window, 1, {scrollTo:{y:430}});
		}
		
	}

	function closeContactAnnouncement() {
		contactRemind.style.display = 'none';
	}


	//events

	hamburger.addEventListener('click', hamburgerMenu);
	btnDownHero.forEach(button => {button.addEventListener('click', skipHero);});
	closeContactRemind.addEventListener('click', closeContactAnnouncement);


})();