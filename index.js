import start from "./modules/start.js";
import './modules/acc.js';
import './modules/burger.js';
import './modules/fly.js';



const init = (op) => {
	// const overlay = document.querySelector(selector);
	start(op);
};

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let daysplus = getRandomInRange(24, 120) % 24;


let datestop = new Date();
datestop.setDate(datestop.getDate() + daysplus);


let stop = String(datestop).slice(0, -3);



init(stop);