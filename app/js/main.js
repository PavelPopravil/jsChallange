const panels = document.querySelectorAll(".panel");

function openPanel() {
	this.classList.toggle('open');
}

function displayText(e) {

	if (e.propertyName === "flex-grow" || e.propertyName === "flex") {
		this.classList.toggle('open-active');
	}
}

panels.forEach(function(panel) {
	return panel.addEventListener('click', openPanel);
});
panels.forEach(function(panel) {
	return panel.addEventListener('transitionend', displayText);
});