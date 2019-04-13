
(() => {

	let 	hamburger			= document.querySelector('.hamburger'),
			mainNav 			= document.querySelector('#mainNav'),
			mainHeaderCon		= document.querySelector('#mainHeaderCon'),
			mainHeader			= document.querySelector('#mainHeader'), 
			mediaQuery1 		= window.matchMedia('(min-width: 938px)'),
			btnDownHero			= document.querySelectorAll('.downArrow'),
			btnTop				= document.querySelector('.btnTop'),
	 	 	scrollTop 			= 0,
			counter   			= 0;

  	//functions
  

	function hamburgerMenu() {
		mainNav.classList.toggle('slideToggle');
		hamburger.classList.toggle('expanded');
	}

	window.onscroll = function(){
		var pageScroll = window.pageYOffset;  

		if (pageScroll > 200 && mediaQuery1.matches) {
			if (pageScroll > scrollTop){
			mainHeader.style.top = '-100%';
			mainHeaderCon.style.top = '-100%';
			}
			else {
				mainHeaderCon.style.top = '0';
			}
		   scrollTop = pageScroll;
		}
		else if (pageScroll < 50 && mediaQuery1.matches) {
			mainHeader.style.top = '0';
			mainHeaderCon.style.top = '52px';
		}
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

		function scrollToTop(e) {
		e.preventDefault();
		TweenLite.to(window, 1, {scrollTo:{y:0}});
	}

	
	//events

	hamburger.addEventListener('click', hamburgerMenu);
	btnDownHero.forEach(button => {button.addEventListener('click', skipHero);});
	btnTop.addEventListener('click', scrollToTop);

})();