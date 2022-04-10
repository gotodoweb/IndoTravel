// console.log('booking');

import loadGoods from './data.js';

const alldata = await loadGoods();

const allreservation = document.querySelector('#reservation__date');
const reserdata = document.getElementById('reservation__date');

const textdata = document.querySelector('.reservation__data');
textdata.textContent = ``;


const reserprice = document.querySelector('.reservation__price');
reserprice.textContent = '';

const reserpeople = document.getElementById('reservation__people');

const wrapper = document.createElement('select');

window.addEventListener('load', function () {

	const tourWrapper = document.querySelector('.reservation__select-wrapper.reservation__select-wrapper_date');
	
	wrapper.name = "dates";
	wrapper.id = "reservation__date"
	wrapper.className = 'reservation__select';


	const tours = alldata.map(item => {
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


	wrapper.insertBefore(datatravel, wrapper.children[0]);
	// console.log('wrapper: ', wrapper);

	wrapper.append(...tours);


	while (tourWrapper.firstChild) {
		tourWrapper.firstChild.remove();
	}

	tourWrapper.append(wrapper);
	// tourWrapper.replaceChild(wrapper, tourWrapper.firstChild);



});



wrapper.addEventListener('change', function () {
	let reserdata = document.querySelector('.reservation__data');
	let selectda = [...wrapper.options].find(option => option.selected).text;
	// console.log('selectda:', selectda);
	let selectedOption = [...reserpeople.options].find(option => option.selected).text;
	// console.log('selectedOption: ', selectedOption);

	if (selectda === 'Дата путешествия') {
		reserdata.textContent = ``;
		reserprice.textContent = '';
	}
	
	for (let dat of alldata) {

		if (dat.date === selectda) {
			reserdata.textContent = `${selectda}, 
					минимальное кол-во человек ${dat['min-people']}, 
					максимальное кол-во человек ${dat['max-people']}.
					`;
			reserprice.textContent = `${dat.price}Р`;

			if (selectedOption !== 'Количество человек') {
				reserprice.textContent = Number(selectedOption) * dat.price;
			}
			
			if (selectda === 'Дата путешествия') {
				reserprice.textContent = '';
			}

		}
	}
});


reserpeople.addEventListener('change', function () {
	let selectda = [...wrapper.options].find(option => option.selected).text;
	let selectedOption = [...reserpeople.options].find(option => option.selected).text;


	for (let dat of alldata) {
		// console.log('dat.date', dat.date);

		if (dat.date === selectda) {
			// reserdata.textContent = `${dat.date}, 
			// минимальное кол-во человек ${dat['min-people']}, 
			// максимальное кол-во человек ${dat['max-people']}.`;
			// reserprice.textContent = Number(selectedOption) * dat.price;
			let priceitogo = Number(selectedOption) * `${dat.price}`;
			reserprice.textContent = `${priceitogo}P`;

			if (selectedOption === 'Количество человек') {
				reserprice.textContent = `${dat.price}P`;
			}
		}

	}

});

