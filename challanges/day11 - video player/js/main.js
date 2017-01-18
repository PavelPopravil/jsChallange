'use strict';

function init() {

	// get all elemets
	var player = document.querySelector('.player');
	var video = player.querySelector('video');
	var progress = player.querySelector('.progress-bar');
	var progressBar = player.querySelector('.progress-bar__filled');

	var playButton = player.querySelector('.toggle');
	var ranges = player.querySelectorAll('input[type="range"]');
	var skipButtons = player.querySelectorAll('[data-skip]');

	// our functions
	function togglePlay() {
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	}

	function updateButton() {

		if (this.paused) {
			playButton.innerHTML = '<svg class="icon-play3">\n\t\t\t\t\t                  <use xlink:href="img/sprite.svg#play3"></use>\n\t\t\t\t\t                </svg> ';
		} else {
			playButton.innerHTML = '<svg class="icon-pause2">\n\t\t\t\t\t                  <use xlink:href="img/sprite.svg#pause2"></use>\n\t\t\t\t\t                </svg> ';
		}
	}

	function skip() {
		video.currentTime += parseFloat(this.dataset.skip);
	};

	function toggleRange() {
		video[this.name] = this.value;
	};

	function handleProgressBar() {
		var percent = video.currentTime / video.duration * 100;
		progressBar.style.width = percent + '%';
	}

	function scrub(e) {
		var scrubTime = e.offsetX / progress.offsetWidth * video.duration;
		video.currentTime = scrubTime;
	}

	// events
	playButton.addEventListener('click', togglePlay);

	video.addEventListener('click', togglePlay);
	video.addEventListener('play', updateButton);
	video.addEventListener('pause', updateButton);
	video.addEventListener('timeupdate', handleProgressBar);
	progress.addEventListener('click', scrub);

	skipButtons.forEach(function (button) {
		return button.addEventListener('click', skip);
	});

	ranges.forEach(function (range) {
		return range.addEventListener('change', toggleRange);
	});
	ranges.forEach(function (range) {
		return range.addEventListener('mousemove', toggleRange);
	});
}

window.init = init();