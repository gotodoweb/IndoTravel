// XMLHttpRequest() которая может и get запрос обрабатывать и POST и PUT и PUSH и DELETE
// чтобы в Preview превью были видны заголовки - их необходимо принять - они могут быть разные и далее проверяем их наличие
// ----> и при передачи коллбека это тоже необходимо учесть
// если возникла ошибка то тогда эта ф-я - то тогда мы должны выполнить какое то дейтсвие


const httpRequest = (url, {
	method = 'GET',
	callback,
	body = {},
	headers,
}) => {
	// ошибка может возникнуть во время асинхронного запроса внутри любой из этих фун-ий (что ниже)
	// хоть при обработке и хоть при получении данных
	// а так же ошибка может возникнуть при распозновании опций
	// поэтому все это оборачиваем в фигурные скобки и обрабатываем это с помощью try

	try {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);

		if (headers) {
			for (const [key, value] of Object.entries(headers)) {
				xhr.setRequestHeader(key, value);
			}
		}

		xhr.addEventListener('load', () => {
			if (xhr.status < 200 || xhr.status >= 300) {
				callback(new Error(xhr.status), xhr.response);
				return;
			}

			const data = JSON.parse(xhr.response);
			// получаем данные и передаем их в коллбек но коллбека может не быть
			// поэтому проверяем есть ли у нас коллбек
			// ----> следовательно здесь 1 параметром передам null а потом уже данные
			if (callback) callback(null, data); // и теперь карточки у нас отрендерились
		})

		xhr.addEventListener('error', () => {
			callback(new Error(xhr.status), xhr.response);
		})
		// в случае если body не будет - то будет передан пустой объект
		// если будет запрос get то не важно что мы сюда передаем - это сервер обрабатывать не будет
		// но при работе с fetch так нельзя
		xhr.send(JSON.stringify(body));
	} catch (err) {
		// но если ошибка возникла то необходимо писать колбек немного иначе
		// устаявшееся правило - 1 параметром она должна принимать ошибку ---> следовательно
		callback(new Error(err));
	}

}

export default httpRequest;