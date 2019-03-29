
(() => {

	const	hamburger			= document.querySelector('.hamburger'),
			mainNav 			= document.querySelector('#mainNav'),
			mainHeaderCon		= document.querySelector('#mainHeaderCon'),
			mainHeader			= document.querySelector('#mainHeader'), 
			mediaQuery1 		= window.matchMedia('(min-width: 768px)');

	function hamburgerMenu() {
		mainNav.classList.toggle('slideToggle');
		hamburger.classList.toggle('expanded');
	}

	var scrollTop = 0;

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

	hamburger.addEventListener('click', hamburgerMenu);

})();