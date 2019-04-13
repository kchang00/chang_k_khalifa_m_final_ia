(()=>{
	
	let subMenuArrows = document.querySelectorAll('.subMenuArrow');


	function expandSubMenu(e) {
		let parent = e.currentTarget.parentElement;
		parent.nextElementSibling.classList.toggle('expanded');
		e.currentTarget.classList.toggle('rotated');
	}

	subMenuArrows.forEach(arrow=>{arrow.addEventListener('click',expandSubMenu);});


})();