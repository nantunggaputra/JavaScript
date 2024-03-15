// Object Oriented Programming

// Constructor Function

// example
function Person(name, age) {
	(this.name = name), (this.age = age);
}
const personOne = new Person("Budi", 17);
console.log(personOne); // Person {name: 'Budi', age: 17}
console.log(personOne.age); // 17

// example how to declare variable without declare the value
function AlsoPerson(name, age) {
	this.name = name;
}
const personTwo = new AlsoPerson("Tono");
console.log(personTwo); // AlsoPerson {name: 'Tono'}
personTwo.age = 18;
console.log(personTwo); // AlsoPerson {name: 'Tono', age: 18}
console.log(personTwo.age); // 18
// console.log(personThree.age); // Uncaught ReferenceError ReferenceError: personThree is not defined

// example how to declare variable after the function
function OtherPerson(name) {
	this.name = name;
}
OtherPerson.prototype.age = 19;
const personThree = new OtherPerson("Ani");
console.log(personThree.age); // 19

// this

// example create function without this.
function AnotherPerson2() {
	const name5 = "Ari";
	const age5 = 20;
	return {
		name5,
		age5,
	};
}
const personFive = AnotherPerson2();
console.log(personFive.age5); // 20

// example create function with this.
function AnotherPerson() {
	(this.name = "Ali"), (this.age = 21);
}
const personFour = new AnotherPerson();
console.log(personFour.age); // 21

// Constructor Syntax

// example
const MyPerson = (newName, newAge) => {
	(this.name = newName), (this.age = newAge);
	return {
		name: this.name,
		age: this.age,
	};
};
const personSix = MyPerson("Abu", 22);
console.log(personSix.age); // 22

// // example error
// const MyPerson = () => {
// 	(this.name = "Abu"), (this.age = 22);
// 	return {
// 		name,
// 		age,
// 	};
// };
// const personSix = MyPerson();
// console.log(personSix.age); // Uncaught ReferenceError ReferenceError: name is not defined

// Class Instructor

// example
class ThePerson {
	constructor() {
		(this.name = "Imam"), (this.age = 23);
	}
}
const personZero = new ThePerson();
console.log(personZero); // ThePerson {name: 'Imam', age: 23}

// Constructor Syntax

// example
class ThisPerson {
	constructor(newName, newAge) {
		(this.name = newName), (this.age = newAge);
	}
}
const personSeven = new ThisPerson("Imam", 23);
console.log(personSeven); // ThisPerson {name: 'Imam', age: 23}
console.log(personSeven.age); // 23
const personEight = new ThisPerson("Syekh", 24);
console.log(personEight.age); // 24
const personNine = new ThisPerson("Gus", 25);
console.log(personNine.age); // 25
