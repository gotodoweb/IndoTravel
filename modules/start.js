
const start = (line, time, datatodiv) => {

	const getzeroten = (period) => {
		return `${period % 60}` < 10 ? `0${period % 60}` : `${period % 60}`;
	};

	const declOfNum = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
		0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

	if (line) {
		const getstarted = () => {
			let getdiv = document.querySelector('.hero__timer');
			getdiv.classList.add('timer');

			let timer = new Date(time);			

			let timerless = timer.getTime();

			console.log((timer.getFullYear() + '-' + (timer.getMonth() + 1) + '-' + timer.getDate() + ' ' + timer.getHours() + ':' + timer.getMinutes() + ':' + timer.getSeconds() + '.' + timer.getMilliseconds()));

			let timenow = Date.now();	

			let timeless = time - timenow;
			

			let minutes = Math.floor(timeless / 1000 / 60 % 60);
			minutes = getzeroten(minutes);		

			let hours = Math.floor(timeless / 1000 / 60 / 60 % 24);
			hours = getzeroten(hours);
	
			const days = Math.floor(timeless / 1000 / 60 / 60 / 24);
			
			getdiv.innerHTML = `
					<p class="timer__title">До конца акции осталось:</p>
					<p class="timer__item timer__item_days">
						<span class="timer__count timer__count_days">${days}</span>
						<span class="timer__units timer__units_days">дня</span>
					</p>
					<p class="timer__item timer__item_hours">
						<span class="timer__count timer__count_hours">${hours}</span>
						<span class="timer__units timer__units_hours">часов</span>
					</p>
					<p class="timer__item timer__item_minutes">
						<span class="timer__count timer__count_minutes">${minutes}</span>
						<span class="timer__units timer__units_minutes">минут</span>
					</p>	
			`;


			const timerBlockDay = document.querySelector('.timer__count_days');
			const timerBlockHour = document.querySelector('.timer__count_hours');
			const timerBlockMin = document.querySelector('.timer__count_minutes');


			return { timeless, minutes, hours, days };
		}

		const runtime = () => {

			let gettime = getstarted();

			const timerdays = document.querySelector('.timer__units_days');
			timerdays.textContent = declOfNum(`${gettime.days}`, ['день', 'дня', 'дней']);

			const timerhours = document.querySelector('.timer__units_hours');
			timerhours.textContent = declOfNum(`${gettime.hours}`, ['час', 'часа', 'часов']);

			const timerminutes = document.querySelector('.timer__units_minutes');
			timerminutes.textContent = declOfNum(`${gettime.minutes}`, ['минута', 'минуты', 'минут']);

			const interbalId = setTimeout(runtime, 1000);

			if (gettime.timeRemaining <= 0) {
				clearTimeout(interbalId);

				timerBlockDay.textContent = '00';
				timerBlockHour.textContent = '00';
				timerBlockMin.textContent = '00';

			}

		}

		runtime();

	};


};



export default start;