'use strict';

function init() {

	var checkboxes = document.querySelectorAll('.container input[type="checkbox"]');

	var lastChecked = void 0;

	function handleCheck(e) {
		var _this = this;

		var inBetween = false;

		if (e.shiftKey === true && this.checked) {

			checkboxes.forEach(function (checkbox) {

				if (checkbox === _this || checkbox === lastChecked) {

					inBetween = !inBetween;
				}

				if (inBetween) {
					checkbox.checked = true;
				}
			});
		}

		lastChecked = this;
	}

	checkboxes.forEach(function (checkbox) {
		return checkbox.addEventListener('click', handleCheck);
	});
}

window.init = init();