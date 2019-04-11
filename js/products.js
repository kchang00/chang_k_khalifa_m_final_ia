
(() => {

	let 	hamburger			= document.querySelector('.hamburger'),
			mainNav 			= document.querySelector('#mainNav'),
			mainHeaderCon		= document.querySelector('#mainHeaderCon'),
			mainHeader			= document.querySelector('#mainHeader'), 
			mediaQuery1 		= window.matchMedia('(min-width: 768px)'),
			btnDownHero			= document.querySelectorAll('.downArrow'),
			lightBox			= document.querySelector('.lightBox'),
			thumbnail			= document.querySelectorAll('.thumbnail'),
			galleryImage		= document.querySelector('.galleryImage'),
			galleryArrowRight	= document.querySelector('#galleryArrowRight'),
			galleryArrowLeft	= document.querySelector('#galleryArrowLeft'),
			lightBoxImages		= document.querySelector('.lightBoxImages'),
			lightBoxImagesCon	= document.querySelector('.lightBoxImagesCon'),
			closeLightBox		= document.querySelector('#closeLightBox'),
			lightBoxImagesArray	= document.querySelectorAll('.lightBoxImg'),
			merchTitle			= document.querySelector('#merchDesc h3'),
			merchSubTitle		= document.querySelector('#merchDesc h4'),
			merchCopy			= document.querySelector('#merchDesc p'),
			merchPrice 			= document.querySelector('#merchDesc h5'),
	 	 	scrollTop 			= 0,
			counter   			= 0,
			arrayLength	  		= lightBoxImagesArray.length,
			currentImage 		= lightBoxImagesArray[0],
			merchTitleArray		= ["Reel Decal Sticker Merch", "Rod Decal Sticker Merch", "Notepad Merch"],
			merchSubTitleArray	= ["TRAA Logo On Reel Decal Sticker", "TRAA Logo On Rod Decal Sticker", "TRAA Logo On Notepad"],
			merchCopyArray		= ["Decorate your rod reel with this decal sticker bearing our logo. The sticker is circular with a 30cm radius. A great gift idea for your kid's fishing rods as well. All purchases help fund our projects.", "Add character to your rod with this decal sticker bearing our logo. The sticker is circular with a radius of 10cm. All purchases help fund our projects.", "A waterproof notepad for all your quick notes as well as important lists. Take it with you fishing, or on your boat, and your notes will stay dry! The notepad is A5 standard size. All purchases help us fund our projects."],
			merchPriceArray		= ['Price: $5.00', 'Price: $4.00', 'Price: $8.00'];
			

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

	function skipHero(e) {
		e.preventDefault;
		if (mediaQuery1.matches) {
			TweenLite.to(window, 1, {scrollTo:{y:740}});
		}
		else {
			TweenLite.to(window, 1, {scrollTo:{y:430}});
		}
		
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
		merchPrice.textContent = merchPriceArray[count];
	}


	//events

	hamburger.addEventListener('click', hamburgerMenu);
	btnDownHero.forEach(button => {button.addEventListener('click', skipHero);});
	galleryImage.addEventListener('click', showLightBox);
	galleryArrowRight.addEventListener('click', function(e) { navigate(1); });
	galleryArrowLeft.addEventListener('click', function(e) { navigate(-1); });
	closeLightBox.addEventListener('click', hideLightBox);
	thumbnail.forEach(img => {img.addEventListener('click', swapMerch);});
	

})();