var content = document.querySelector('.js-content');

function resizeHeaderOnScroll() {
	var distanceY = this.pageYOffset || this.scrollTop;
	var distanceShrink = 100;
	var header = document.querySelector('.js-header');

	if (distanceY > distanceShrink) {
		header.classList.add("is-small");
	}
	else {
		header.classList.remove("is-small");
	}
}

content.addEventListener('scroll', resizeHeaderOnScroll);
