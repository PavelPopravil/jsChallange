'use strict';

function init() {

	var productList = document.querySelector('.product-list');
	var addItems = document.querySelector('.add-items');
	var items = JSON.parse(localStorage.getItem('items')) || [];

	function addProduct(e) {
		e.preventDefault();
		var text = this.querySelector('[name="item"]').value;

		var item = {
			text: text,
			status: false
		};
		items.push(item);
		printTheList(items, productList);
		localStorage.setItem('items', JSON.stringify(items));
		this.reset();
	};

	function printTheList() {
		var plates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var platesList = arguments[1];

		platesList.innerHTML = plates.map(function (plate, i) {
			return '\n\t\t\t\t<li>\n\t\t\t\t\t<input type="checkbox" data-index="' + i + '" id="item' + i + '" ' + (plate.done ? 'checked' : '') + ' >\n\t\t\t\t\t<label for="item' + i + '">' + plate.text + '</label>\n\t\t\t\t</li>\n\t\t\t';
		}).join('');
	};

	function toggleCheck(e) {

		var el = e.target;
		if (!el.matches('input')) return;
		var index = el.dataset.index;
		items[index].done = !items[index].done;
		localStorage.setItem('items', JSON.stringify(items));
		printTheList(items, productList);
	};

	addItems.addEventListener('submit', addProduct);
	productList.addEventListener('click', toggleCheck);
	printTheList(items, productList);
}

window.init = init();