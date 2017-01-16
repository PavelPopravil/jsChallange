function init() {
	
	const canvas = document.querySelector('#draw');
	const ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight; 

	ctx.strokeStyle = '#BADA55';
	ctx.lineCap = 'round';
	ctx.lineJoin = 'round';
	ctx.lineWidth = 15;

	let isDrawing = 0;
	let lastX = 0;
	let lastY = 0;
	let hue = 0;
	let direction = true;

	function draw(e) {
		if (!isDrawing) return false;
		
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
		
		ctx.beginPath();
		// start form
		ctx.moveTo(lastX, lastY);
		// go to
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		[lastX, lastY] = [e.offsetX, e.offsetY];
		hue++;

		// line-color
		if (hue >= 360) {
			hue = 0;
		}

		// line-width
		if (ctx.lineWidth >= 50 || ctx.lineWidth <= 5) {
			direction = !direction;
		}
		if (direction) {
			ctx.lineWidth++;
		} else {
			ctx.lineWidth--;
		}
	}

	canvas.addEventListener('mousedown', (e) => {
		isDrawing = true;
		[lastX, lastY] = [e.offsetX, e.offsetY];
	});
	canvas.addEventListener('mousemove', draw);
	canvas.addEventListener('mouseup', () => isDrawing = 0);
	canvas.addEventListener('mouseout', () => isDrawing = 0);

}

window.init = init();

