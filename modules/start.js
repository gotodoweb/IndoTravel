
const start = (deadline) => {


	const timerBlockDay = document.querySelector('.timer__count_days');
	const timerBlockHour = document.querySelector('.timer__count_hours');
	const timerBlockMin = document.querySelector('.timer__count_minutes');
	const eltimer = document.querySelector('.timer');
	// eltimer.getAttribute('data-deadline');

	
	// eltimer.dataset.timerDeadline = new Date().toLocaleString();


	const getDeadline = () => {
		

		let myDate1 = deadline.slice(6, 10) + '.' + deadline.slice(3, 5) + '.' + deadline.slice(0, 2) + ',' + deadline.slice(11,);
		console.log('myDate1: ', myDate1);

		eltimer.dataset.deadline = myDate1;

		let data1 = Date.parse(myDate1);
		console.log('data1: ', data1);

	
		let dateNow = new Date();
		
		dateNow = dateNow.toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });
		console.log('dateNow: ', dateNow);
		

		let myDate2 = dateNow.slice(6, 10) + '.' + dateNow.slice(3, 5) + '.' + dateNow.slice(0, 2) + ',' + dateNow.slice(11,);
		console.log('myDate2: ', myDate2);
		eltimer.dataset.timerDeadline = myDate2;
		let data2 = Date.parse(myDate2);
		console.log('data2: ', data2);
		
		

		let timeRemaining = data1 - data2;
		console.log('timeRemainig: ', timeRemaining);
		// let proverka = new Date(timeRemaining);
		// console.log('proverka: ', proverka);


		const seconds = Math.floor(timeRemaining / 1000);	


		const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
		


		const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
		
		const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
		

		return { timeRemaining, minutes, hours, days, seconds };
	}


	const runtimer = () => {
		let gettimer = getDeadline();

		if (gettimer.seconds >= 86400) {
			console.log('gettimer.days: ', gettimer.days);
			eltimer.style.background = 'red';
			timerBlockDay.textContent = gettimer.days;
			timerBlockHour.textContent = gettimer.hours;
			timerBlockMin.textContent = gettimer.minutes;


			if (gettimer.minutes < 10) {
				timerBlockMin.textContent = `0${gettimer.minutes}`;
			}

			if (gettimer.hours < 10) {
				timerBlockHour.textContent = `0${gettimer.hours}`;
				// timerBlockHour.textContent = `(${hours} % 12 || 12) < 10 ? '0' : '') + ${ hours } % 12 || 12)`;
			}

			const arrdays = ['день', 'дня', 'дней']
			const timerdays = document.querySelector('.timer__units_days');

			const declOfNum = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
				0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

			timerdays.textContent = declOfNum(`${gettimer.days}`, arrdays);

			const arrhours = ['час', 'часа', 'часов']
			const timerhours = document.querySelector('.timer__units_hours');

			const declOfNum3 = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
				0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

			timerhours.textContent = declOfNum3(`${gettimer.hours}`, arrhours);


			const arrminutes = ['минута', 'минуы', 'минут']
			const timerminutes = document.querySelector('.timer__units_minutes');

			const declOfNum1 = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
				0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

			timerminutes.textContent = declOfNum1(`${gettimer.minutes}`, arrminutes);
			const interbalId = setTimeout(runtimer, 1000);

		} else {
	
			let nds = new Date(gettimer.timeRemaining);
			

			let getsec = () => {
				return (nds.getSeconds() < 10 ? '0' : '') + nds.getSeconds();
			};

			let secless = getsec();
			console.log('secless: ', secless);


			eltimer.style.background = 'green';
			timerBlockDay.textContent = gettimer.hours;
			timerBlockHour.textContent = gettimer.minutes;
			timerBlockMin.textContent = secless;


			if (gettimer.minutes < 10) {
				timerBlockDay.textContent = `0${gettimer.minutes}`;
			}
			if (gettimer.seconds < 10) {
				timerBlockMin.textContent = `0${gettimer.seconds}`;
			}

			const arrhours = ['час', 'часа', 'часов']
			const timerdays = document.querySelector('.timer__units_days');

			const declOfNum = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
				0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

			timerdays.textContent = declOfNum(`${gettimer.hours}`, arrhours);

			const arrminutes = ['минута', 'минуты', 'минут']
			const timerhours = document.querySelector('.timer__units_hours');

			const declOfNum3 = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
				0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

			timerhours.textContent = declOfNum3(`${gettimer.minutes}`, arrminutes);


			const arrseconds = ['секунда', 'секунды', 'секунд']
			const timerminutes = document.querySelector('.timer__units_minutes');

			const declOfNum1 = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
				0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

			timerminutes.textContent = declOfNum1(`${secless}`, arrseconds);
			const interbalId = setTimeout(runtimer, 1000);
		}


		if (gettimer.timeRemaining <= 0) {
			clearTimeout(interbalId);
			timerBlockDay.textContent = '00';
			timerBlockHour.textContent = '00';
			timerBlockMin.textContent = '00';
			const herotext = document.querySelector('.hero__text');
			const herotimer = document.querySelector('.hero__timer');
			herotext.parentNode.removeChild(herotext);
			herotimer.parentNode.removeChild(herotimer);

		}
	}
	runtimer();

	


};







export default start;