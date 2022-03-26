import start from "./modules/start.js";

const init = (op, timestamp, datatodiv) => {
	// const overlay = document.querySelector(selector);
	start(op, timestamp, myDate);
};

const atribut = document.querySelector('.hero__timer');
let yesno = atribut.getAttribute('data-timer-deadline');


let datatodiv = yesno.slice(0, 10);


let  yesnonew = yesno.replaceAll("/", ".");
yesnonew = yesnonew.slice(0, 10);



let myDate = yesno.slice(6, 10) + '.' + yesno.slice(3, 5) + '.' + yesno.slice(0, 2);
console.log('myDate: ', myDate);



let timestamp = Date.parse(myDate);
console.log('timestamp: ', timestamp);

var isDate = function (date) {
	return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

// console.log(isDate(yesno));
let begin = isDate(myDate);
console.log('begin: ', begin);

init(begin, timestamp, datatodiv);