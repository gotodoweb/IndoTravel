console.log('fly');

const plane = document.createElement('div');
const docEl = document.documentElement;


let lastScrollTop = 0;
/*
window.onscroll = onScroll;

function onScroll(e) {
	var top = window.pageYOffset;
	if (lastScrollTop > top) {
		console.log('top8888888888888888');
		plane.style.transform = 'rotate(180deg)';
	} else if (lastScrollTop < top) {
		console.log('down55555555555555555555');
		plane.style.transform = 'rotate(0deg)';
	}
	lastScrollTop = top;
}
*/



plane.style.cssText = `
	position: fixed;
	width: 50px;
	height: 50px;
	right: 0;
	bottom: 0;
	pointer-events: none;
	background: url('img/airplane.svg') center/contain no-repeat;

`; 

document.body.append(plane);



const calcPositionFLy = () => {


	const maxtop = docEl.scrollHeight - plane.clientHeight;
	

	const maxScroll = docEl.scrollHeight - docEl.clientHeight;
	

	const percentScroll = (window.pageYOffset * 100) / maxScroll;
	

	const height = window.innerHeight;
	

	const scrollY = window.scrollY;
	
	// задать % расстоянию которое обозначает maxtop
	// выяснить сколько процентов из maxtop нам необходимо прокрутить

	const top = maxtop * (percentScroll / 100);



	const smooth = maxtop / docEl.clientHeight;
	
	
	
	plane.style.transform = `translateY(${- top / smooth}px)`;

	let to = window.pageYOffset;

	if (lastScrollTop > to) {	
		// plane.style.transform = `rotate(${window.pageYOffset}deg)`;		
		// plane.style.transform = 'rotate(0.5turn)';
		// plane.style.transform = 'rotate(180deg)';
		plane.style.transform = `translateY(${- top / smooth}px) rotate(180deg)`;
	} else if (lastScrollTop < to) {			
		// plane.style.transform = 'rotate(0deg)';	
		// plane.style.transform = `translateY(${- top / smooth}px)`;
	}
	
	lastScrollTop = to;
	
	
	if (percentScroll === 100) {
		plane.style.transform = `translateY(${maxScroll - top}px)`;
		// plane.style.transform = 'rotate(180deg)';
	}

	if (percentScroll <= 1) {
		plane.style.transform = `translateY(${docEl.clientHeight - height}px)`;
	}

	if (docEl.clientWidth < 758) {
		plane.style.transform = `translateY(${docEl.scrollHeight + plane.clientHeight}px)`;
	}


	// if (percentScroll === 0) {
	// 	plane.style.transform = `translateY(${docEl.scrollHeight - docEl.clientHeight}px)`;
	// }



};

window.addEventListener('scroll', calcPositionFLy);
calcPositionFLy();

window.addEventListener(`resize`, function () {
	// console.log('docEl.clientWidth', docEl.clientWidth);
	if (docEl.clientWidth < 758) {

		plane.style.transform = `translateY(${docEl.scrollHeight + plane.clientHeight}px)`;
	} else {
		calcPositionFLy();
	}

});



