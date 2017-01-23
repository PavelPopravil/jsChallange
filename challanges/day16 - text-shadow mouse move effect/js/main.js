'use strict';

function init() {

	var container = document.querySelector('.container');
	var text = container.querySelector('h1');
	var move = 15; /*100px*/

	function shadow(e) {

		var width = container.offsetWidth;
		var height = container.offsetHeight;

		var x = e.offsetX;
		var y = e.offsetY;

		if (this !== e.target) {
			x = x + e.target.offsetLeft;
			y = y + e.target.offsetTop;
		}

		var xMove = Math.round(x / width * move - move / 2);
		var yMove = Math.round(y / height * move - move / 2);

		text.style.textShadow = xMove + 'px ' + yMove + 'px 0 rgba(0, 0, 0, 0.4)';
	}

	container.addEventListener('mousemove', shadow);
}

window.init = init();