
// import loadGoods from './data.js';
// import httpRequest from './data.js';
import fetchRequest from './data.js';

import { url } from './data.js';

// const alldata = await loadGoods();
const allreservation = document.querySelector('#reservation__date');
const reserdata = document.getElementById('reservation__date');

const textdata = document.querySelector('.reservation__data');
// console.log('textdata: ', textdata);
textdata.textContent = ``;


const reserprice = document.querySelector('.reservation__price');
reserprice.textContent = '';

const reserpeople = document.getElementById('reservation__people');
const peopleup = document.getElementById('tour__people');
const dateup = document.getElementById('tour__date');

const wrapper = document.createElement('select');
const wrapperselect = document.createElement('select');

const wrapperpeople1 = document.createElement('select');
const wrapperpeople2 = document.createElement('select');

let dates1 = [];
let people1 = [];

const renderGoods = (err, data) => {
	if (err) {
		console.warn(err, data);
		const h2 = document.createElement('h2');
		h2.style.color = 'red';
		h2.textContent = err;
		document.body.append(h2);
		return;
	}

	const tourWrapper = document.querySelector('.reservation__select-wrapper.reservation__select-wrapper_date');
	// console.log('tourWrapper', tourWrapper);


	wrapper.name = "dates";
	wrapper.id = "reservation__date"
	wrapper.className = 'reservation__select';


	const tours = data.map(item => {
		const tour = document.createElement('option');

		tour.value = `${item.date}`;
		tour.className = 'tour__option reservation__option'
		tour.textContent = `${item.date}`;
		// console.log(tour);
		return tour;
	});



	const datatravel = document.createElement('option');
	datatravel.value = ``;
	datatravel.className = 'tour__option';
	datatravel.textContent = `Дата путешествия`;

	// console.log('datatravel', datatravel);

	wrapper.insertBefore(datatravel, wrapper.children[0]);
	// console.log('wrapper: ', wrapper);

	wrapper.append(...tours);


	while (tourWrapper.firstChild) {
		tourWrapper.firstChild.remove();
	}

	tourWrapper.append(wrapper);
	// tourWrapper.replaceChild(wrapper, tourWrapper.firstChild);
	// console.log('tourWrapper', tourWrapper);

	/****************************** */
	const tourselectWrapper = document.querySelector('.tour__select-wrapper.tour__select-wrapper_date');

	wrapperselect.name = "dates";
	wrapperselect.id = "tour__date"
	wrapperselect.className = 'tour__select';

	const toursselect = data.map(item => {
		const tour = document.createElement('option');

		tour.value = `${item.date}`;
		tour.className = 'tour__option'
		tour.textContent = `${item.date}`;
		// console.log(tour);
		dates1.push(tour.textContent);
		return tour;
	});

	const datatravelselect = document.createElement('option');
	datatravelselect.value = ``;
	datatravelselect.className = 'tour__option';
	datatravelselect.textContent = `Выбери дату1`;

	wrapperselect.insertBefore(datatravelselect, wrapperselect.children[0]);
	wrapperselect.append(...toursselect);

	while (tourselectWrapper.firstChild) {
		tourselectWrapper.firstChild.remove();
	}

	tourselectWrapper.append(wrapperselect);
	/************peopele1  что вверху*/
	const peopleselectWrapper = document.querySelector('.tour__select-wrapper.tour__select-wrapper_people');

	wrapperpeople1.name = 'people';
	wrapperpeople1.id = 'tour__people';
	wrapperpeople1.className = 'tour__select';

	const peopleselect1 = data.map(item => {
		const countp = document.createElement('option');

		countp.value = `min${item['min-people']} - max${item['max-people']}`;
		countp.className = 'tour__option';
		countp.textContent = `min${item['min-people']} - max${item['max-people']}`;
		// console.log(tour);
		people1.push(countp.textContent);
		return countp;
	});


	const peoplelselect = document.createElement('option');
	peoplelselect.value = ``;
	peoplelselect.className = 'tour__option';
	peoplelselect.textContent = `Количество человек1`;

	wrapperpeople1.insertBefore(peoplelselect, wrapperpeople1.children[0]);
	wrapperpeople1.append(...peopleselect1);

	while (peopleselectWrapper.firstChild) {
		peopleselectWrapper.firstChild.remove();
	}

	peopleselectWrapper.append(wrapperpeople1);

	/******actions for peopele1  что вверху */
	tourselectWrapper.addEventListener('change', function () {

		let selectedDate = [...wrapperselect.options].find(option => option.selected).text;
		console.log('selectedDate: ', selectedDate);
		let nu = dates1.findIndex(i => i === selectedDate);

		if (nu === -1) {
			peoplelselect.textContent = `Количество человек1`;
		}

		if (selectedDate !== `Выбери дату1`) {

			peoplelselect.textContent = people1[Number(nu)];
		}

	});

	peopleselectWrapper.addEventListener('change', function () {

		let selectedDate2 = [...wrapperpeople1.options].find(option => option.selected).text;
		console.log('selectedDate2: ', selectedDate2);

		let ny = people1.findIndex(y => y === selectedDate2);


		if (ny === -1) {
			datatravelselect.textContent = `Выбери дату1`;
		}

		if (selectedDate2 !== `Количество человек1`) {

			datatravelselect.textContent = dates1[Number(ny)];
		}

	});

	/********actions */


	wrapper.addEventListener('change', function () {
		let reserdata = document.querySelector('.reservation__data');
		let selectda = [...wrapper.options].find(option => option.selected).text;
		// console.log('selectda1: ', selectda);

		let selectedOption1 = [...reserpeople.options].find(option => option.selected).text;
		// console.log('selectedOption1: ', selectedOption);


		if (selectda === 'Дата путешествия') {
			reserdata.textContent = ``;
			reserprice.textContent = '';
		}

		for (let dat of data) {

			if (dat.date === selectda) {
				reserdata.textContent = `${selectda}, 
					минимальное кол-во человек ${dat['min-people']}, 
					максимальное кол-во человек ${dat['max-people']}.
					`;
				reserprice.textContent = `${dat.price}Р`;

				if (selectedOption1 !== 'Количество человек') {
					reserprice.textContent = Number(selectedOption1) * dat.price;
				}

				if (selectda === 'Дата путешествия') {
					reserprice.textContent = '';
				}

			}
		}
	});


	reserpeople.addEventListener('change', function () {
		// e.preventDefault();
		// let rem = e.target.tagName;
		// console.log('rem: ', rem);
		let rem = 'SELECT';

		let selectda = [...wrapper.options].find(option => option.selected).text;
		// console.log('selectda2: ', selectda);
		let selectedOption2 = [...reserpeople.options].find(option => option.selected).text;


		for (let dat of data) {
			if (dat.date === selectda) {
				console.log('selectedOption2: ', selectedOption2);
				// reserdata.textContent = `${dat.date}, 
				// минимальное кол-во человек ${dat['min-people']}, 
				// максимальное кол-во человек ${dat['max-people']}.`;
				// reserprice.textContent = Number(selectedOption) * dat.price;
				let priceitogo = Number(selectedOption2) * dat.price;
				reserprice.textContent = `${priceitogo}P`;

				if (selectedOption2 === 'Количество человек') {
					reserprice.textContent = `${dat.price}P`;
				}
			}

		}

	});


}

// loadGoods(url, renderGoods);
fetchRequest(url, { method: 'get', callback: renderGoods });