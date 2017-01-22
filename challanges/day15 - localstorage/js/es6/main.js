function init() {

	const productList = document.querySelector('.product-list');
	const addItems = document.querySelector('.add-items');
	const items = JSON.parse(localStorage.getItem('items')) || [];


	function addProduct(e) {
		e.preventDefault();
		const text = this.querySelector('[name="item"]').value;
		
		const item = {
			text: text,
			status: false
		}
		items.push(item);
		printTheList(items, productList);
		localStorage.setItem('items', JSON.stringify(items));
		this.reset();
	};


	function printTheList(plates = [], platesList) {
		platesList.innerHTML = plates.map((plate, i) => {
			return `
				<li>
					<input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''} >
					<label for="item${i}">${plate.text}</label>
				</li>
			`;
		}).join('');
	};

	function toggleCheck(e) {

		const el = e.target;
		if (!el.matches('input')) return;
		const index = el.dataset.index;
		items[index].done = !items[index].done;
		localStorage.setItem('items', JSON.stringify(items));
		printTheList(items, productList);
	};

	addItems.addEventListener('submit', addProduct); 
	productList.addEventListener('click', toggleCheck);
	printTheList(items, productList);
}

window.init = init();

