// EcmaScript Introduction
// EcmaScript 6 (2015)
// block scope & global scope
// let & const

// Arrow Function
const increment = (x) => x + 1;
console.log(increment(6)); // 7
// // same with Traditional Function
// const incrementToo = function (x) {
// 	return x + 1;
// };
// console.log(incrementToo(6)); // 7

// example without argument
const logSomething = () => console.log("this is something");
logSomething(); // this is something

// example with single argument
const multiplyByTwo = (n) => console.log(n * 2);
multiplyByTwo(4); // 8

// example with two argument
const multiply = (x, y) => console.log(x * y);
multiply(10, 0.9); // 9

// example with multiple argument
const isCheckAge = (n) => {
	if (n >= 18) {
		return true;
	}
	return false;
};
console.log(isCheckAge(10)); // false

// Spread Syntax
let numbers = [3, 4];
let additionalNumbers = [1, 2, ...numbers, 5, 6];
console.log(additionalNumbers); // [1, 2, 3, 4, 5, 6]
// // same with Traditional Syntax
// additionalNumbers = [1, 2, numbers[0], numbers[1], 5, 6];
// console.log(additionalNumbers); // [1, 2, 3, 4, 5, 6]

// example
function sumThreeNumbers(a, b, c) {
	return a + b + c;
}
const threeNumbers = [5, 4.5, 0.5];
console.log(sumThreeNumbers(...threeNumbers)); // 10

// example
const obj1 = {
	firstName: "Nantungga",
	lastName: "Putra",
};
const obj2 = { age: 27 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // {firstName: 'Nantungga', lastName: 'Putra', age: 27}

// For of & For in
// variable
// iterables

// example for of array
numbers = [100, 200, 300];
for (const eachNumber of numbers) {
	console.log(eachNumber); // 100 // 200 // 300
}
let name = "Nan";
for (const alphabet of name) {
	console.log(alphabet); // N // a // n
}

// example for in object
for (const key in obj1) console.log(key); // firstName // lastName
for (const key in obj2) console.log(key); // age
for (const key in obj3) console.log(key); // firstName // lastName // age

// example for in array
for (const key in numbers) console.log(key); // index / 0 // index / 1 // index / 2
for (const key in numbers) console.log(numbers[key]); // 100 // 200 // 300
