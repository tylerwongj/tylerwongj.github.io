var content = document.querySelector('.js-content');

function resizeHeaderOnScroll() {
	var distanceY = this.pageYOffset || this.scrollTop;
	var distanceShrink = 100;
	var header = document.querySelector('.js-header');
	var headerBottomRow = document.querySelector('.portfolio-navigation-row');
	var $window = $(window);
	var drawerButton = header.querySelector('.mdl-layout__drawer-button')

	if (distanceY > distanceShrink) {
		header.classList.add("is-small");
		headerBottomRow.style.opacity = '0';
		headerBottomRow.style.height = '0';
		headerBottomRow.querySelector('nav').style.position = 'relative';
		headerBottomRow.querySelector('nav').style.top = '-1000px';

		if ($window.width() >= '1025') {
			drawerButton.style.opacity = '1';
			drawerButton.style.width = '48px';
		}
	}
	else {
		header.classList.remove("is-small");
		headerBottomRow.style.opacity = '1';
		headerBottomRow.style.height = '45px';
		headerBottomRow.querySelector('nav').style.top = '0';

		if ($window.width() >= '1025') {
			drawerButton.style.opacity = '0';
			drawerButton.style.width = '0';
		}
	}
}

content.addEventListener('scroll', resizeHeaderOnScroll);
