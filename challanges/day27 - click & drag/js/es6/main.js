function init() {

	const slider = document.querySelector('.slider');
	const img = document.querySelector('.slider__item img');
	let isDown = false;
	let startX;
	let scrollLeft;

	slider.addEventListener('mousedown', (e) => {
		isDown = true;
		slider.classList.add('active');
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});

	slider.addEventListener('mouseleave', () => {
		isDown = false;
		slider.classList.remove('active');
	});

	slider.addEventListener('mouseup', () => {
		isDown = false;
		slider.classList.remove('active');
		img.setAttribute('disabled', 'false');
	});

	slider.addEventListener('mousemove', (e) => {
		if (!isDown) return;
		const x = e.pageX - slider.offsetLeft;
		const walk = x - startX;
		slider.scrollLeft = scrollLeft - walk;
	});


}

window.init = init();

