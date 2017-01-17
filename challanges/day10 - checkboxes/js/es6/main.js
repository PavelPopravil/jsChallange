function init() {

	const checkboxes = document.querySelectorAll('.container input[type="checkbox"]');
	
	let lastChecked;


	function handleCheck(e) {
		
		let inBetween = false;

		if (e.shiftKey === true && this.checked) {

			checkboxes.forEach(checkbox => {
				
				if (checkbox === this || checkbox === lastChecked) {

					inBetween = !inBetween;

				}

				if (inBetween) {
					checkbox.checked = true;
				}

			});
		}

		lastChecked = this;
	}

	checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

}

window.init = init();
