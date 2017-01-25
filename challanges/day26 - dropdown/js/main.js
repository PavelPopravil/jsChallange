'use strict';

function init() {

	var triggers = document.querySelectorAll('.nav-list__item');
	var background = document.querySelector('.drop-bg');
	var nav = document.querySelector('.main-nav');

	function handleEnter() {
		var _this = this;

		this.classList.add('trigger-enter');
		if (this.classList.contains('trigger-enter')) {
			setTimeout(function () {
				return _this.classList.add('trigger-enter-active');
			}, 150);
		}

		background.classList.add('open');

		var dropdown = this.querySelector('.dropdown');
		var dropdownCoords = dropdown.getBoundingClientRect();
		var navCoords = nav.getBoundingClientRect();

		var coords = {
			height: dropdownCoords.height,
			width: dropdownCoords.width,
			top: dropdownCoords.top - navCoords.top,
			left: dropdownCoords.left - navCoords.left
		};

		background.style.width = coords.width + 'px';
		background.style.height = coords.height + 'px';
		background.style.transform = 'translate(' + coords.left + 'px, ' + coords.top + 'px)';
	}

	function handleLeave() {
		this.classList.remove('trigger-enter', 'trigger-enter-active');
		background.classList.remove('open');
	}

	triggers.forEach(function (trigger) {
		return trigger.addEventListener('mouseenter', handleEnter);
	});
	triggers.forEach(function (trigger) {
		return trigger.addEventListener('mouseleave', handleLeave);
	});
}

window.init = init();