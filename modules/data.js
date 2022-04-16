// console.log('data');
/*
const loadGoods = async () => {
	// const result = await fetch('https://bfs01.getcourse.ru/public/files/251231/195/cbe21783a515f15b9fc7c49f727da123.json');
	const result = await fetch('./db_data.json');

	// точно так же можем получить данные json
	const data = await result.json();
	// console.log('dataloadGoods' ,data);
	return data;
}
*/

const loadGoods = (callback) => {

	const xhr = new XMLHttpRequest();

	// xhr.open('GET', 'https://vast-temple-70797.herokuapp.com/api/goods');
	xhr.open('GET', './db_data.json');

	xhr.addEventListener('load', () => {
		// console.log('load');

		const data = JSON.parse(xhr.response);
		// console.log('data: ', data);
		// и теперь карточки у нас отрендерились
		callback(data); 
	})
	
	xhr.addEventListener('error', () => {
		console.log('error');
	})

	xhr.send();

}


export default loadGoods;

