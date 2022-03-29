console.log('burger');
const buttonMenu = document.querySelector('.header__menu-button');


const headerMenu = document.querySelector('.header__menu');


const headerItems = document.querySelectorAll('.header__item');


buttonMenu.addEventListener('click', () =>  {
	headerMenu.classList.toggle('header__menu_active');
	
});

headerItems.forEach(elem => {
	elem.addEventListener('click', () => {
		headerMenu.classList.toggle('header__menu_active');
	})
});