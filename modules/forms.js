// console.log('forms');


const sendData = (body, callback) => {

	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

	xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

	xhr.addEventListener('load', () => {
		const data = JSON.parse(xhr.response);
		callback(data); 
	})

	xhr.addEventListener('error', () => {
		console.log('error');
	})

	xhr.send(JSON.stringify(body));
}




const button = document.querySelector('.button.reservation__button');
button.type = "submit";
// console.log('button: ', button);
// button.className = 'button reservation__button';

let formsend = document.querySelector('.reservation__form');
console.log('formsend: ', formsend);
// formsend.method = 'POST';
// formsend.action = '/apply/';
formsend.id = 'formsend';

// formsend.action = 'submit';

let form = document.getElementById('formsend');
console.log('form: ', form);
// form.method = 'POST';

let inputfio = document.querySelector('.reservation__input.reservation__input_name');
inputfio.name = 'fio';

let phone = document.getElementById('reservation__phone');
phone.name = 'phone';

let people = document.getElementById('reservation__people');
people.name = 'people';



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
	console.log('Отправка!');
	
	let selectedpeople = [...people.options].find(option => option.selected).text;
	console.log('selectedpeople: ', selectedpeople);	
	
	form.people.value = `${selectedpeople}`;

	console.log('form.people.value', form.people.value);
	serializeForm(form)

	const formData = new FormData(event.target);
	// создаем объект и передаем туда formData
	const newContact = Object.fromEntries(formData);
	console.log('newContact: ', newContact);

	sendData({
		title: form.title.value,
		body: form.dates.value,
		people: form.people.value,

	}, (data) => {
		form.textContent = `Заявка успешно отправлена, номер заявки ${data.id}`;

	});

	form.reset();
};

form.addEventListener('submit', handleFormSubmit);
