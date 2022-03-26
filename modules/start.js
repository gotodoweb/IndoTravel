
const start = (deadline) => {


	const timerBlockDay = document.querySelector('.timer__count_days');
	const timerBlockHour = document.querySelector('.timer__count_hours');
	const timerBlockMin = document.querySelector('.timer__count_minutes');
	const eltimer = document.querySelector('.timer');
	// eltimer.getAttribute('data-deadline');
	
	eltimer.dataset.deadline = new Date(deadline).toLocaleString();
	eltimer.dataset.timerDeadline = new Date().toLocaleString();
	

	const getDeadline = () => {
		

		let dateBreak = new Date(deadline).getTime();
		
		
		let dateNow = Date.now();		
		let timeRemaining = dateBreak - dateNow;
	

		const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);


		const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);


		const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24 );
		

		return { timeRemaining, minutes, hours, days };
	}

	const runtimer = () => {
	
		let gettimer = getDeadline();

		timerBlockDay.textContent = gettimer.days;		
		timerBlockHour.textContent = gettimer.hours;
		timerBlockMin.textContent = gettimer.minutes;

		if (gettimer.minutes < 10) {
			timerBlockMin.textContent = `0${gettimer.minutes}`;
		};

		if (gettimer.hours < 10) {
			timerBlockHour.textContent = `0${gettimer.hours}`;
			// timerBlockHour.textContent = `(${hours} % 12 || 12) < 10 ? '0' : '') + ${ hours } % 12 || 12)`;
		};

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