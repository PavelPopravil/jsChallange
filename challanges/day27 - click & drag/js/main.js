'use strict';

function init() {

	var slider = document.querySelector('.slider');
	var img = document.querySelector('.slider__item img');
	var isDown = false;
	var startX = void 0;
	var scrollLeft = void 0;

	slider.addEventListener('mousedown', function (e) {
		isDown = true;
		slider.classList.add('active');
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});

	slider.addEventListener('mouseleave', function () {
		isDown = false;
		slider.classList.remove('active');
	});

	slider.addEventListener('mouseup', function () {
		isDown = false;
		slider.classList.remove('active');
		img.setAttribute('disabled', 'false');
	});

	slider.addEventListener('mousemove', function (e) {
		if (!isDown) return;
		var x = e.pageX - slider.offsetLeft;
		var walk = x - startX;
		slider.scrollLeft = scrollLeft - walk;
	});
}

window.init = init();