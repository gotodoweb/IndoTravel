
const items = document.querySelectorAll('.travel__item');

const itemsButtons = document.querySelectorAll('.travel__item-title');

const textWrapper = document.querySelectorAll('.travel__item-text-wrapper');


let heightWrapper = 0;
textWrapper.forEach(elem => {
	if(heightWrapper < elem.scrollHeight) {
		heightWrapper = elem.scrollHeight;
	}
});


itemsButtons.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		for(let i = 0; i < items.length; i+= 1) {			
			textWrapper[i].style.height = 
				items[i].classList.contains('item_active') ?
				'' : `${textWrapper[i].scrollHeight}px`;
			if (index === i) {
				items[i].classList.toggle('travel__item_active');
			} else {
				items[i].classList.remove('travel__item_active');
				textWrapper[i].style.height = '';
			}
		}
		
	});
	
});

