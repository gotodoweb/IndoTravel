

const plane = document.createElement('div');
const docEl = document.documentElement;



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
	

	if (percentScroll >= 99) {
		plane.style.transform = `translateY(${maxScroll - top}px)`;
	}

	if (percentScroll <= 1) {
		plane.style.transform = `translateY(${docEl.clientHeight - height}px)`;
	}

	if (docEl.clientWidth < 758) {
		plane.style.transform = `translateY(${docEl.scrollHeight + plane.clientHeight}px)`;
	}
};

window.addEventListener('scroll', calcPositionFLy);
calcPositionFLy();

window.addEventListener(`resize`, function() {
		
	if (docEl.clientWidth < 758) {

		plane.style.transform = `translateY(${docEl.scrollHeight + plane.clientHeight}px)`;
	} else {
		calcPositionFLy();
	}

});