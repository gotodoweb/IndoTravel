
const start = (deadline) => {


	const timerBlockDay = document.querySelector('.timer__count_days');
	const timerBlockHour = document.querySelector('.timer__count_hours');
	const timerBlockMin = document.querySelector('.timer__count_minutes');
	const eltimer = document.querySelector('.timer');
	// eltimer.getAttribute('data-deadline');
	
	eltimer.dataset.deadline = new Date(deadline).toLocaleString();
	eltimer.dataset.timerDeadline = new Date().toLocaleString();
	
	const getzeroten = (period) => {

		return `${period % 60}` < 10 ? `0${period % 60}` : `${period % 60}`;
	};

	const declOfNum = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
		0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

	const getDeadline = () => {
		
		let dateBreak = new Date(deadline).getTime();
			
		let dateNow = Date.now();
	
		let timeRemaining = dateBreak - dateNow;
	

		let minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
	
		minutes = getzeroten(minutes);

		// `(${hours} % 12 || 12) < 10 ? '0' : '') + ${hours} % 12 || 12)`
		
		let hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);

		hours = getzeroten(hours);


		const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24 );
	

		return { timeRemaining, minutes, hours, days };
	}

	const runtimer = () => {
	
		let gettimer = getDeadline();
	

		timerBlockDay.textContent = gettimer.days;		
		timerBlockHour.textContent = gettimer.hours;
		timerBlockMin.textContent = gettimer.minutes;

		const timerdays = document.querySelector('.timer__units_days');
		timerdays.textContent = declOfNum(`${gettimer.days}`, ['день', 'дня', 'дней']);
	
		const timerhours = document.querySelector('.timer__units_hours');
		timerhours.textContent = declOfNum(`${gettimer.hours}`, ['час', 'часа', 'часов'])

		
		const timerminutes = document.querySelector('.timer__units_minutes');
		timerminutes.textContent = declOfNum(`${gettimer.minutes}`, ['минута', 'минуты', 'минут']);

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