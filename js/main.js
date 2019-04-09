
(() => {

	let 	hamburger			= document.querySelector('.hamburger'),
			mainNav 			= document.querySelector('#mainNav'),
			mainHeaderCon		= document.querySelector('#mainHeaderCon'),
			mainHeader			= document.querySelector('#mainHeader'), 
			mediaQuery1 		= window.matchMedia('(min-width: 768px)'),
			lightBox			= document.querySelector('.lightBox'),
			thumbnail			= document.querySelectorAll('.thumbnail'),
			galleryImage		= document.querySelector('.galleryImage'),
			galleryArrowRight	= document.querySelector('#galleryArrowRight'),
			galleryArrowLeft	= document.querySelector('#galleryArrowLeft'),
			lightBoxImages		= document.querySelector('.lightBoxImages'),
			lightBoxImagesCon	= document.querySelector('.lightBoxImagesCon');
			closeLightBox		= document.querySelector('#closeLightBox'),
			lightBoxImagesArray	= lightBoxImages.querySelectorAll('img'),
			merchTitle			= document.querySelector('#merchDesc h3'),
			merchSubTitle		= document.querySelector('#merchDesc h4'),
			merchCopy			= document.querySelector('#merchDesc p'),
	 	 	scrollTop = 0,
			counter   = 0,
			arrayLength	  	= lightBoxImagesArray.length,
			currentImage 	= lightBoxImagesArray[0],
			merchTitleArray		= ["Reel Decal Sticker Merch", "Rod Decal Sticker Merch", "Notepad Merch"],
			merchSubTitleArray	= ["TRAA Logo On Reel Decal Sticker", "TRAA Logo On Rod Decal Sticker", "TRAA Logo On Notepad"],
			merchCopyArray		= ["Decorate your rod reel with this decal sticker bearing our logo. The sticker is circular with a 30cm radius. All purchaces help fund our projects.", "Add character to your rod with this decal sticker bearing our logo. The sticker is circular with a radius of 10cm. All purchaces help fund our projects.", "A notepad for all your quick notes as well as important lists and reminders. The notepad is A5 standard size, which means enough space for everything in one page. All purchases help us fund our projects."],
			carouselOptions		= document.querySelectorAll('.carouselOption'),
			carouselImages		= document.querySelector('.carouselImages');

  	//functions
  
  	function animateCarousel() {
		const offSet = 1200; // width of one image
		totalOffset = this.dataset.offset * offSet;

		TweenMax.to(carouselImages, 0.8, {right: totalOffset});
	}

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
	function showLightBox() {
		lightBox.classList.add('showLightBox');
	}

	function navigate(direction) {
		currentImage.classList.remove('currentImage');
		counter = counter + direction;
		if (direction == -1 && counter < 0) {
			counter = arrayLength - 1; 
		}
		if (direction == 1 && !lightBoxImagesArray[counter]) {
			counter = 0;
		}
		currentImage = lightBoxImagesArray[counter];
		currentImage.classList.add('currentImage');
	}

	function hideLightBox() {
		lightBox.classList.remove('showLightBox');
	}

	function swapMerch() {
		// swap image
		let ref = this.dataset.ref;
		galleryImage.src = `images/${ref}`;
		//swap text
		let count = this.dataset.count;
		merchTitle.textContent = merchTitleArray[count];
		merchSubTitle.textContent = merchSubTitleArray[count];
		merchCopy.textContent = merchCopyArray[count];
	}


	//events

	hamburger.addEventListener('click', hamburgerMenu);
	galleryImage.addEventListener('click', showLightBox);
	galleryArrowRight.addEventListener('click', function(e) { navigate(1); });
	galleryArrowLeft.addEventListener('click', function(e) { navigate(-1); });
	closeLightBox.addEventListener('click', hideLightBox);
	thumbnail.forEach(img => {img.addEventListener('click', swapMerch);});
	carouselOptions.forEach(option => option.addEventListener('click', animateCarousel));

})();