
// import httpRequest from "./httpRequest.js";
import fetchRequest from "./fetch.js";
import showModal from "./modal.js";

const URL = 'https://cryptic-temple-67554.herokuapp.com/api/goods';
// const URL = 'https://vast-temple-70797.herokuapp.com/api/goods';



const renderGoods = (err, data) => {
	if (err) {
		console.warn(err, data)
		const h2 = document.createElement('h2');
		h2.style.color = 'red';
		h2.textContent = err;
		document.body.append(h2);
		return;
	}

	const cardsWrapper = document.createElement('div');
	cardsWrapper.className = 'cards';

	//l3.7 Для наших товаров мы добавим кнопку
	const goods = data.map(item => {
		const card = document.createElement('div');
		card.className = 'card';
		card.innerHTML = `
			<h2>${item.title}</h2>
			<br>
			<p>Цена: ${item.price}Р</p>
			<br>
			<p>Цена: ${item.description}Р</p>
			<button class="open" data-id="${item.id}">Подробнее</button>
		`;
		return card;
	})

	cardsWrapper.append(...goods);

	// 3.7 добавим возможность что при клике на cardWrapper
	// будем определять на какую карточку кликнули
	cardsWrapper.addEventListener('click', ({target}) => {
		if (target.classList.contains('open')) {
			fetchRequest(`${URL}${target.dataset.id}`, {
				callback: showModal,
			});
		}
	});

	document.body.append(cardsWrapper);

	//l3.7
	// get.classList.remove('get_active');
	// return 'Успех';
	// return true;

}

// теперь пробуем с помощью этой функции выполнить
const get = document.querySelector('#get');

// и перепишем ф-ю которая делает get запрос
// теперь  у нас будет запрос от ф-и httpRequest
// коллбек ф-я будет передаваться уже внутри
get.addEventListener('click', async () => {
	//мы можем управлять стилями из js-скрипта
	get.classList.add('get_active');

	const result = await fetchRequest(URL, {
		method: 'get',
		callback: renderGoods,
	});

	if (result) {
		get.classList.remove('get_active');
	}

	console.log('result:', result);

	/*
	httpRequest(URL, {
		method: 'get',
		callback: renderGoods,
	});

	fetchRequest(URL, {
		method: 'get',
		callback: renderGoods,
	});
	*/

});

/* Lesson 3.7
Бывате такое что callback ф-я которую мы передаем должа что-то вернуть
т.к. вызов ф-ии происходит внутри fetchRequest и результат мы получить не можем
ХОТЯ МОЖЕМ -  можем сделать ее асинхронной - дождаться выполнения fetchRequest
и получить результат - underfined т.е ф-я действительно что-то возвращает
но так как в ф-и fetchRequest нет никакого вывода мы получаем underdefined

а вот сделать так что бы ф-я httpREquest возвращала в result то придется писать
очень громоздкий код - но если добавить сюда промисы то код сильно сократиться
в этом случае он почти не измениться - но пока не будем пользоваться httpRequest

Мы сделали preload(добавления get_active) и его добавили чтобы объяснить что в современной 
вебразработке можно обойтись запросами fetchRequest ну или httpRequest если он нужен 
например чтобы отследить прогресс загрузки 

Но иногда нам требуется более сложный функционал -например когда мы полностью формируем страницу
на js-те из разных компонентов или один компонет формируем с помощью js-та
и ОПРЕДЕЛЕННЫЕ СТИЛИ ДОЛЖНЫ ЗАГРУЖАТЬСЯ ТОЛЬКО ТОГДА КОГДА стилизируемые элементы появляются
на странице



*/