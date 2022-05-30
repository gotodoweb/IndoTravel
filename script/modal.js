const showModal = (err, data) => {
	const overlay = document.createElement('div');
	const modalWindow = document.createElement('div');
	const title = document.createElement('h2');
	const description = document.createElement('p');
	const price = document.createElement('p');
	const buy = document.createElement('button');
	const close = document.createElement('button');

	overlay.classList.add('overlay');
	modalWindow.classList.add('modalWindow');

	title.classList.add('title');
	title.textContent = data.title;

	description.classList.add('description');
	description.textContent = data.description;

	price.classList.add('price');
	price.textContent = `${data.price}P`;

	buy.classList.add('buy');
	buy.textContent = "Купить";

	close.classList.add('close');
	close.textContent = 'Закрыть';

	overlay.append(modalWindow);
	modalWindow.append(title, description, price, buy, close);

	close.addEventListener('click', () => {
		overlay.remove();
	});

	document.body.append(overlay);

};

export default showModal;
