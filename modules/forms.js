// console.log('forms');
// import httpRequest from './data.js';
import fetchRequest from './data.js';


const sendData = (body, callback) => {

	const xhr = new XMLHttpRequest();

	xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

	xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

	xhr.addEventListener('load', () => {
		const data = JSON.parse(xhr.response);
		callback(null, data);
	})

	xhr.addEventListener('error', () => {
		console.log('error');
	});

	xhr.send(JSON.stringify(body));
}

const button = document.querySelector('.button.reservation__button');
// button.type = "submit";
// console.log('button: ', button);
// button.className = 'button reservation__button';

let formsend = document.querySelector('.reservation__form');

// formsend.method = 'POST';
// formsend.action = '/apply/';
formsend.id = 'formsend';

// formsend.action = 'submit';

let form = document.getElementById('formsend');

// form.method = 'POST';

let inputfio = document.querySelector('.reservation__input.reservation__input_name');
inputfio.name = 'fio';

let phone = document.getElementById('reservation__phone');
phone.name = 'phone';

let peoples = document.getElementById('reservation__people');
// people.name = 'people';

let price = document.querySelector('.reservation__price');
// price.name = 'price';

function serializeForm(formNode) {
	const { elements } = formNode;

	Array.from(elements)
		.forEach((element) => {
			const { name, value } = element;
			console.log({ name, value });
		})
}

function handleFormSubmit(event) {
	// Просим форму не отправлять данные самостоятельно
	event.preventDefault();
	console.log('Отправка1!');

	let selectedpeople = [...peoples.options].find(option => option.selected).text;
	console.log('selectedpeople: ', selectedpeople);

	// form.people.value = selectedpeople;

	// console.log('form.people.value', form.people.value);
	serializeForm(form);

	const formData = new FormData(event.target.entries);
	// const formData = new FormData(event.target);
	// создаем объект и передаем туда formData
	const newContact = Object.fromEntries(formData);
	console.log('newContact: ', newContact);

	fetchRequest('https://jsonplaceholder.typicode.com/posts', {
		method: 'post',
		body: {
			title: form.title.value,
			dates: form.dates.value,
			people: selectedpeople,
			fio: form.fio.value,
			phone: form.phone.value,
			price: price.textContent,
		},
		callback(err, data) {
			if (err) {
				console.warn(err, data);
				form.innerHTML = `
					<h2 class='texth2'>Упс... Что-то пошло не так</h2>
					
					<h4 class='ptext'>
						Ну удалось отправить заявку. Пожалуйста, повторите отправку еще раз.
					</h4>

					<button class="button reservation__button">Забронировать</button>
				`;
			} else {
			
				form.innerHTML = `
					<h2 class='texth2'>	Ваша&nbsp;аявка&nbsp;успешно</h2>\n<h2>отправлена</h2>
					
					<h4 class='ptext'>
						Наши менеджеры свяжутся с вами в течении 3-х рабочих дней
					</h4>

					<div class='elips'></div>
				`;

				// form.append(elips);
				form.style.width = '980px';
				form.style.height = '495px';
				let texth2 = form.querySelector('.texth2');
				texth2.style.marginTop = '1px';
				texth2.style.weight = 400;
				texth2.style.size = '34px';
				texth2.style.lineHeight = '51px';



				let ptext = form.querySelector('.ptext');
				form.style.border = "1px solid #AFAFAF";
				ptext.style.marginTop = '40px';
				let elips = form.querySelector('.elips');
				elips.style.cssText = `
					position: absolute;
					width: 100px;
					height: 100px;
					// right: 310px;
					margin: 270px 440px 135px 440px;
					// bottom: 15px;
					pointer-events: none;
					background: url('img/Ok.svg') center/contain no-repeat;

				`;

				// elips.style.margin = "310px 440px 85px 440px";
			}

		},
		headers: {
			'Content-Type': 'application/json',
		}
	});

	form.reset();
};

form.addEventListener('submit', handleFormSubmit);


/********footerform */
const button2 = document.querySelector('.button.footer__button');


const he2 = document.querySelector('.footer__title.footer__form-title');


let footerform = document.querySelector('.footer__form');


let footeremail = document.querySelector('.footer__input');
footeremail.name = 'email';

function footerFormSubmit(event) {
	// Просим форму не отправлять данные самостоятельно
	event.preventDefault();
	console.log('Отправка2!');

	// form.people.value = `${selectedpeople}`;

	console.log('footerform.footeremail.value', footerform.email.value);
	serializeForm(footerform);

	const formData = new FormData(event.target);
	// создаем объект и передаем туда formData
	const newemail = Object.fromEntries(formData);
	console.log('newemail: ', newemail);


	sendData({
		title: footerform.title.value,
		email: footerform.email.value,

	}, (data) => {

		footerform.innerHTML = `
			<h3>Ваша заявка успешно</h3>
			<h3>отправлена</h3>
			<br>
			<br>
			<p class='textp'>
				Наши менеджеры свяжутся с
				вами в течении 3-х рабочих дней
			</p>
			
		`;
		let textp = footerform.querySelector('.textp');
		textp.style.border = "1px solid red";
		textp.style.padding = '15px';
		// footerform.textContent = `

		// 	Наши менеджеры свяжутся с
		// 	вами в течении 3-х рабочих дней	
		// `;

		// footerform.style.border = "1px solid red";;

	});


	// footerform.reset();
};

footerform.addEventListener('submit', footerFormSubmit);

