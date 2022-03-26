import start from "./modules/start.js";

const init = (op) => {
	// const overlay = document.querySelector(selector);
	start(op);
};

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let daysplus = getRandomInRange(1, 10) ;


let datestop = new Date();
datestop.setDate(datestop.getDate() + daysplus);
// datestop = datestop.toLocaleString();



init(datestop);