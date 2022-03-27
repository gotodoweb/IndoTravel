import start from "./modules/start.js";

const init = (op) => {
	// const overlay = document.querySelector(selector);
	start(op);
};

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let daysplus = Math.floor(getRandomInRange(24, 72) / 24);


// function changeTimezone() {

// 	let datestop = new Date();	
// 	let usDate = datestop.toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });
// 	return usDate;
// }


let date = new Date();


date.setDate(date.getDate() + daysplus);

let usDate = date.toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });


init(usDate);