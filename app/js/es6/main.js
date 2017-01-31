function init() {

	const video = document.querySelector('video');
	const speed = document.querySelector('.speed');
	const speedBar = document.querySelector('.speed__bar');

	function toggleSpeed(e) {

		const y = e.pageY - speed.offsetTop;
		const percent = y / speed.offsetHeight;
		const min = 0.4;
		const max = 4;
		const height = `${Math.round(percent * 100)}%`;
		const playBackRate = percent * (max - min) + min;

		speedBar.style.height = height;
		speedBar.textContent = `${playBackRate.toFixed(1)}x`
		video.playbackRate = playBackRate.toFixed(1);
	};

	(function setStartSpeed() {

		speedBar.textContent = `${video.playbackRate}x`

	}());

	speed.addEventListener('mousemove', toggleSpeed);

}

window.init = init();

