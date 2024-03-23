// Introduction
// a function which is send as an argument to another function

// example
function greeting(name) {
	alert("Hello, " + name);
}
function processUserInput(callback) {
	var name = prompt("Please enter your name.");
	callback(name);
}
processUserInput(greeting);

// example
function processUserInput2(callback) {
	var age = prompt("How old are you? You must 18+ to enter this site!");
	if (age >= 18 && age <= 100) {
		callback(age);
	} else {
		window.close("", "_parent", "");
	}
}
// anonymous function
processUserInput2(function (age) {
	alert("OK! You're " + age + " years old.");
});
// // normal function
// processUserInput2(function enter(age) {
// 	alert("OK! You're " + age + " years old.");
// });

// example arrow function
const greeting2 = (name) => {
	alert("Hello again, " + name);
};
const processUserInput3 = (callback) => {
	var name = prompt("Please enter your name again.");
	callback(name);
};
// processUserInput3(greeting2)

// example arrow function
const processUserInput4 = (callback) => {
	var age = prompt("Please enter your age again. You must 18+ to enter this site!");
	callback(age);
};
processUserInput4((age) => (age >= 18 && age <= 100 ? alert("OK! You're " + age + " years old.") : window.close("", "_parent", "")));

// Why Callback
// support asynchronous
// function customization

// example
let list = ["celana", "sabuk", "alas kaki", "baju"];
list.sort();
console.log(list); // ['alas kaki', 'baju', 'celana', 'sabuk']
let numb = [1, 30, 4, 21, 100000];
numb.sort();
console.log(numb); // [1, 100000, 21, 30, 4]

// example function customization using callback
function compareNumber(a, b) {
	return a - b;
}
numb.sort(compareNumber);
console.log(numb); // [1, 4, 21, 30, 100000]

// example function customization using callback
let point = [200, 9, 120, 45, 90, 20, 60, 10];
point.sort((a, b) => a - b);
console.log(point); // [9, 10, 20, 45, 60, 90, 120, 200]
