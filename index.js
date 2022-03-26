import start from "./modules/start.js";

const init = (op) => {
	// const overlay = document.querySelector(selector);
	start(op);
};

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let daysplus = Math.floor(getRandomInRange(24, 72) / 24);




let date = new Date();
// console.log('date', date);

date.setDate(date.getDate() + daysplus);
// console.log('date', date);

let usDate = date.toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });




init(usDate);