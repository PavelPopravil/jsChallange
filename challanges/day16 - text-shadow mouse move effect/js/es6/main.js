function init() {

	const container = document.querySelector('.container');
	const text = container.querySelector('h1');
	const move = 15; /*15px*/

	function shadow(e) {

		const width = container.offsetWidth;
		const height = container.offsetHeight;

		let x = e.offsetX;
		let y = e.offsetY;

		if (this !== e.target) {
			x = x + e.target.offsetLeft;
			y = y + e.target.offsetTop;
		}

		const xMove = Math.round((x / width * move) - (move / 2));
		const yMove = Math.round((y / height * move) - (move / 2));

		text.style.textShadow = `${xMove}px ${yMove}px 0 rgba(0, 0, 0, 0.4)`;
	}

	container.addEventListener('mousemove', shadow);
}

window.init = init();

