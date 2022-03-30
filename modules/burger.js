
const buttonMenu = document.querySelector('.header__menu-button');


const headerMenu = document.querySelector('.header__menu');


const headerItems = document.querySelectorAll('.header__item');

const sectionHero = document.getElementsByTagName('main')[0];




buttonMenu.addEventListener('click', () =>  {
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


