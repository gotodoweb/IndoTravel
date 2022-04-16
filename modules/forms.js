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
button.type = 'submit';
// console.log('button: ', button);

let form = document.querySelector('.reservation__form');
console.log('form: ', form);
form.method = 'POST';
// formsend.id = 'formsend';
// formsend.action = 'submit';
// let form = document.querySelector('#formsend');

form.addEventListener('submit', event => {
	event.preventDefault();
	console.log('submit');
	console.log('event.target', event.target);
	// const formData = new FormData(event.target);
	// const newOrder = Object.fromEntries(formData);

	// console.log('newOrder: ', newOrder);

	/*
	sendData({
		title: form.title.value,
		body: form.dates.value,
		people: form.people.value,

	}, (data) => {
		form.textContent = `Заявка успешно отправлена, номер заявки ${data.id}`;

	});
	*/
	// form.reset();
});