
const buttonMenu = document.querySelector('.header__menu-button');
const docEl = document.documentElement;

const headerMenu = document.querySelector('.header__menu');


const headerItems = document.querySelectorAll('.header__item');

const sectionHero = document.getElementsByTagName('main')[0];
const header = document.querySelector('header');


const duration = 1000;
let distance = 10;
let requestId = NaN;


const startAnimation = (duration, callback) => {
	let startAnimation = NaN;
	requestId = requestAnimationFrame(function step(timestamp) {
		startAnimation ||= timestamp;
		const progress = (timestamp - startAnimation) / duration;
		callback(progress);

		if (progress < 1) {
			requestId = requestAnimationFrame(step);
		}

	})
}

const easeInOut = time => 0.5 * (1 - Math.cos(Math.PI * time));

function bounce(timeFraction) {
	for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
		if (timeFraction >= (7 - 4 * a) / 11) {
			return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
		}
	}
};


buttonMenu.addEventListener('click', () => {
	startAnimation(duration, (progress) => {
				
		if ( 1150 < docEl.clientWidth < 1500) {
			distance = 50;
			let left = bounce(progress) * distance;
			// let left = easeInOut(progress) * distance;
			headerMenu.style.transform = `translateX(${left}px)`;
		}

		if (docEl.clientWidth > 1500) {
			distance = 180;
			let left = bounce(progress) * distance;
			// let left = easeInOut(progress) * distance;
			headerMenu.style.transform = `translateX(${left}px)`;
		}

	});
	headerMenu.classList.toggle('header__menu_active');
});



headerItems.forEach(elem => {
	elem.addEventListener('click', (e) => {
		e.preventDefault();		
		headerMenu.classList.toggle('header__menu_active');
	})
});


sectionHero.addEventListener('click', (e) => {
	e.preventDefault();	
	if (e.target !== headerMenu) {		
		headerMenu.classList.remove('header__menu_active');
	}
})

