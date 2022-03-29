import start from "./modules/start.js";
import './modules/acc.js';
import './modules/burger.js';

const init = (op) => {
	// const overlay = document.querySelector(selector);
	start(op);
};

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let daysplus = getRandomInRange(24, 120) % 24;
console.log('daysplus: ', daysplus);

let datestop = new Date();
datestop.setDate(datestop.getDate() + daysplus);
// datestop = datestop.toLocaleString();
console.log('datestop: ', datestop);

let stop = String(datestop).slice(0, -3);
console.log('stop', stop);


init(stop);