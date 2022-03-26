


const start = (line, time, datatodiv) => {
	
	if (line) {
		const getstarted = () => {
			let getdiv = document.querySelector('.hero__timer');
			getdiv.classList.add('timer');

			let timer = new Date(time);
			
			let timerless = timer.getTime();


			// console.log((timer.getFullYear() + '-' + (timer.getMonth() + 1) + '-' + timer.getDate() + ' ' + timer.getHours() + ':' + timer.getMinutes() + ':' + timer.getSeconds() + '.' + timer.getMilliseconds()));

			let timenow = Date.now();
		

			let timeless = time - timenow;
			console.log('timeless: ', timeless);


			const minutes = Math.floor(timeless / 1000 / 60 % 60);


			const hours = Math.floor(timeless / 1000 / 60 / 60 % 24);

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

			if (hours < 10) {
				timerBlockHour.textContent = `0${hours}`;
				// timerBlockHour.textContent = `(${hours} % 12 || 12) < 10 ? '0' : '') + ${ hours } % 12 || 12)`;
			}
			if (minutes < 10) {
				timerBlockMin.textContent = `0${minutes}`;
			}



			return {timeless, minutes, hours, days};
		}

		const runtime = () => {

			let gettime = getstarted();

			const arrdays = ['день', 'дня', 'дней']
			const timerdays = document.querySelector('.timer__units_days');

			const declOfNum = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
				0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

			timerdays.textContent = declOfNum(`${gettime.days}`, arrdays);

			const arrhours = ['час', 'часа', 'часов']
			const timerhours = document.querySelector('.timer__units_hours');

			const declOfNum3 = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
				0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

			timerhours.textContent = declOfNum3(`${gettime.hours}`, arrhours);


			const arrminutes = ['минута', 'минуы', 'минут']
			const timerminutes = document.querySelector('.timer__units_minutes');

			const declOfNum1 = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
				0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

			timerminutes.textContent = declOfNum1(`${gettime.minutes}`, arrminutes);

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