
(() => {

	let 	hamburger			= document.querySelector('.hamburger'),
			mainNav 			= document.querySelector('#mainNav'),
			mainHeaderCon		= document.querySelector('#mainHeaderCon'),
			mainHeader			= document.querySelector('#mainHeader'), 
			mediaQuery1 		= window.matchMedia('(min-width: 938px)'),
			btnTop				= document.querySelector('.btnTop'),
			video 				= document.querySelector('video'),
			videoOverlay		= document.querySelector('.videoOverlay'),
	 	 	scrollTop 			= 0,
			counter   			= 0;


  	//functions


	function hamburgerMenu() {
		mainNav.classList.toggle('slideToggle');
		hamburger.classList.toggle('expanded');
	}

	window.onscroll = function(){
		var pageScroll = window.pageYOffset;  

		if (pageScroll > 200) {
			if (pageScroll > scrollTop && mediaQuery1.matches){
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

	function scrollToTop(e) {
		e.preventDefault();
		TweenLite.to(window, 1, {scrollTo:{y:0}});
	}

	function playPauseVideo() {
		if (video.paused == true) {
			videoOverlay.style.display = 'none';
			video.load();
			video.play();
		} else {
			video.pause();
		}
	}



	//events

	hamburger.addEventListener('click', hamburgerMenu);
	btnTop.addEventListener('click', scrollToTop);
	videoOverlay.addEventListener('click', playPauseVideo);

})();