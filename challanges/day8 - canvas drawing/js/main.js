'use strict';

function init() {

	var canvas = document.querySelector('#draw');
	var ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	ctx.strokeStyle = '#BADA55';
	ctx.lineCap = 'round';
	ctx.lineJoin = 'round';
	ctx.lineWidth = 15;

	var isDrawing = 0;
	var lastX = 0;
	var lastY = 0;
	var hue = 0;
	var direction = true;

	function draw(e) {
		if (!isDrawing) return false;

		ctx.strokeStyle = 'hsl(' + hue + ', 100%, 50%)';

		ctx.beginPath();
		// start form
		ctx.moveTo(lastX, lastY);
		// go to
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		var _ref = [e.offsetX, e.offsetY];
		lastX = _ref[0];
		lastY = _ref[1];

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

	canvas.addEventListener('mousedown', function (e) {
		isDrawing = true;
		var _ref2 = [e.offsetX, e.offsetY];
		lastX = _ref2[0];
		lastY = _ref2[1];
	});
	canvas.addEventListener('mousemove', draw);
	canvas.addEventListener('mouseup', function () {
		return isDrawing = 0;
	});
	canvas.addEventListener('mouseout', function () {
		return isDrawing = 0;
	});
}

window.init = init();