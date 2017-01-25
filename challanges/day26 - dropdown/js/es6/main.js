function init() {

	const triggers = document.querySelectorAll('.nav-list__item');
	const background = document.querySelector('.drop-bg');
	const nav = document.querySelector('.main-nav');

	function handleEnter() {

		this.classList.add('trigger-enter');
		if (this.classList.contains('trigger-enter')) {
			setTimeout(() => this.classList.add('trigger-enter-active'), 150);
		}
			
		background.classList.add('open');

		const dropdown = this.querySelector('.dropdown');
		const dropdownCoords = dropdown.getBoundingClientRect();
		const navCoords = nav.getBoundingClientRect();

		const coords = {
			height: dropdownCoords.height,
			width: dropdownCoords.width,
			top: dropdownCoords.top - navCoords.top,
			left: dropdownCoords.left - navCoords.left
		};

		background.style.width = `${coords.width}px`;
		background.style.height = `${coords.height}px`;
		background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

	}

	function handleLeave() {
		this.classList.remove('trigger-enter', 'trigger-enter-active');
		background.classList.remove('open');

	}

	triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
	triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

}

window.init = init();

