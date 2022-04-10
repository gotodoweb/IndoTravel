// console.log('data');

const loadGoods = async () => {
	// const result = await fetch('https://bfs01.getcourse.ru/public/files/251231/195/cbe21783a515f15b9fc7c49f727da123.json');
	const result = await fetch('./db_data.json');

	// точно так же можем получить данные json
	const data = await result.json();
	// console.log('dataloadGoods' ,data);
	return data;
}

/*
const renderGoods = async () => {
	const data = await loadGoods();

	const cardsWrapper = document.createElement('div');
	cardsWrapper.className = 'cards';

	const goods = data.map(item => {
		const card = document.createElement('div');
		card.className = 'card';
		card.innerHTML = `
			<h2>${item.date}</h2>
			<br>
			<p>minpeople: ${item['min-people']}</p>
			<br>
			<p>maxpeople: ${item['max-people']}</p>
			<p>Цена: ${item.price}Р</p>
			<br>
		`;
		console.log('card', card);
		return card;
	})

	const alldata = { ...goods};
	console.log('alldata: ', alldata);

	// cardsWrapper.append(...goods);
	
	// document.body.append(cardsWrapper);
}
*/

// renderGoods();
export default loadGoods;

