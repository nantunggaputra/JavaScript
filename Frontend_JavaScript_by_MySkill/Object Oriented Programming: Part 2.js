// Class Method

// example
class Person {
	constructor(newName) {
		(this.name = newName), (this.age = this.randomAge());
	}
	randomAge() {
		return Math.floor(Math.random(100) * 100);
	}
}
const personEleven = new Person("Mike");
console.log(personEleven); // ThisPerson {name: 'Mike', age: (random number 1-99)}
console.log(personEleven.age); // (random number 1-99)

// Static Method without new Function()

// example
class AlsoPerson {
	static randomAge() {
		return Math.floor(Math.random(100) * 100);
	}
	static log(str) {
		console.log(str);
	}
}
console.log(AlsoPerson.randomAge()); // (random number 1-99)
AlsoPerson.log("string"); // string

// Getter

// example without ()
class OtherPerson {
	constructor(newName, newAge) {
		(this.name = newName), (this.age = newAge);
	}
	get randomAge() {
		return Math.floor(Math.random(100) * 100);
	}
}
const personTwelve = new OtherPerson("Bruce", 33);
console.log(personTwelve.age); // 33
console.log(personTwelve.randomAge); // (random number 1-99)
// console.log(personTwelve.randomAge()); // Uncaught TypeError TypeError: personTwelve.randomAge is not a function

// example without ()
class AnotherPerson2 {
	constructor(newName, newAge, newGender) {
		(this.name = newName), (this.age = newAge), (this.gender = newGender);
	}
	get getGender() {
		return "Good Morning " + (this.gender === "L" ? "Mr. " : "Ms. ") + this.name + "!";
	}
}
const personThirteen = new AnotherPerson2("Bruce", 33, "L");
console.log(personThirteen.getGender); // Good Morning Mr. Bruce!

// example with ()
class AnotherPerson {
	constructor(newName, newAge, newGender) {
		(this.name = newName), (this.age = newAge), (this.gender = newGender);
	}
	getGender() {
		return "Good Morning " + (this.gender === "L" ? "Mr. " : "Ms. ") + this.name + "!";
	}
}
const personFourteen = new AnotherPerson("Bruce", 33, "L");
console.log(personFourteen.getGender()); // Good Morning Mr. Bruce!

// Setter

// example
class MyPerson {
	constructor(newName, newAge, newGender) {
		(this.name = newName), (this.age = newAge), (this.gender = newGender);
	}
	get getGender() {
		return "Good Morning " + (this.gender === "L" ? "Mr. " : "Ms. ") + this.name + "!";
	}
	get getName() {
		return this.name;
	}
	set setNameSecured(changedName) {
		this.name = changedName;
	}
}
const personFiveteen = new MyPerson("Bruce", 33, "L");
console.log(personFiveteen.getName); // Bruce
personFiveteen.setNameSecured = "Batman";
console.log(personFiveteen.getName); // Batman
