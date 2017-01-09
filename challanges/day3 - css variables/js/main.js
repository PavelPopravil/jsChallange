const inputs = document.querySelectorAll(".container input");


function handleUpdate() {

	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty('--' + this.name, this.value + suffix);
	if (this.name === 'blur') {
		document.documentElement.style.setProperty('--' + this.name, (this.value / 5) + suffix);
	}
}


inputs.forEach(function(input) {
	return input.addEventListener('change', handleUpdate);
});
inputs.forEach(function(input) {
	return input.addEventListener('mousemove', handleUpdate);
});
