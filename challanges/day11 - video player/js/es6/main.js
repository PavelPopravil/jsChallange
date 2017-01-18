function init() {


	// get all elemets
	const player = document.querySelector('.player');
	const video = player.querySelector('video');
	const progress = player.querySelector('.progress-bar');
	const progressBar = player.querySelector('.progress-bar__filled')

	const playButton = player.querySelector('.toggle');
	const ranges = player.querySelectorAll('input[type="range"]');
	const skipButtons = player.querySelectorAll('[data-skip]');

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
			playButton.innerHTML = `<svg class="icon-play3">
					                  <use xlink:href="img/sprite.svg#play3"></use>
					                </svg> `;
		}	 else {
			playButton.innerHTML = `<svg class="icon-pause2">
					                  <use xlink:href="img/sprite.svg#pause2"></use>
					                </svg> `;
		}
					
	}

	function skip() {
		video.currentTime += parseFloat(this.dataset.skip);
	};

	function toggleRange() {
		video[this.name] = this.value;
	};

	function handleProgressBar() {
		const percent = (video.currentTime / video.duration )* 100;
		progressBar.style.width = `${percent}%`;
	}

	function scrub(e) {
		const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
		video.currentTime = scrubTime;
	}

	// events
	playButton.addEventListener('click', togglePlay);

	video.addEventListener('click', togglePlay);
	video.addEventListener('play', updateButton);
	video.addEventListener('pause', updateButton);
	video.addEventListener('timeupdate', handleProgressBar);
	progress.addEventListener('click', scrub);

	skipButtons.forEach(button => button.addEventListener('click', skip));

	ranges.forEach(range => range.addEventListener('change', toggleRange));
	ranges.forEach(range => range.addEventListener('mousemove', toggleRange));
}

window.init = init();
