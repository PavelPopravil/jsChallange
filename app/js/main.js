'use strict';

function init() {

	var video = document.querySelector('video');
	var speed = document.querySelector('.speed');
	var speedBar = document.querySelector('.speed__bar');

	function toggleSpeed(e) {

		var y = e.pageY - speed.offsetTop;
		var percent = y / speed.offsetHeight;
		var min = 0.4;
		var max = 4;
		var height = Math.round(percent * 100) + '%';
		var playBackRate = percent * (max - min) + min;

		speedBar.style.height = height;
		speedBar.textContent = playBackRate.toFixed(1) + 'x';
		video.playbackRate = playBackRate.toFixed(1);
	};

	(function setStartSpeed() {

		speedBar.textContent = video.playbackRate + 'x';
	})();

	speed.addEventListener('mousemove', toggleSpeed);
}

window.init = init();