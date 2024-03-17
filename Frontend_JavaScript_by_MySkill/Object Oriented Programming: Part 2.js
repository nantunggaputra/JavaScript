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

// Public & Private Property
class ThePerson {
	// with the hash tag (#) means that the variable is private property
	#relationship;
	constructor(name, age) {
		// without the hash tag (#) means that the variable is public property
		(this.name = name), (this.age = age), (this.#relationship = "In shambles");
	}
	get getRelationship() {
		return this.#relationship;
	}
	getRelation() {
		return this.#relationship;
	}
}
const personSixteen = new ThePerson("You", 20);
console.log(personSixteen.getRelationship); // In shambles
console.log(personSixteen.getRelation()); // In shambles
// console.log(personSixteen.#relationship); // Private field '#relationship' must be declared in an enclosing class
// console.log(personSixteen.relationship); // undefined

// Encapsulation
// private the property to prevent its value changed by other function or by outsider

// example without Encapsulation
class Ongkir {
	constructor(weight) {
		(this.pajak = 1000), (this.biaya = this.calculatePrice(weight));
	}
	calculatePrice(weight) {
		return weight * 1000;
	}
	get totalPrice() {
		return this.biaya + this.pajak;
	}
}
const ongkosKirim = new Ongkir(20);
console.log(ongkosKirim.totalPrice); // 21000
ongkosKirim.pajak = 5000; // value can changed by outsider
console.log(ongkosKirim.totalPrice); // 25000

// example with Encapsulation
class OngkirSecured {
	#pajak;
	constructor(weight) {
		(this.#pajak = 1000), (this.biaya = this.calculatePrice(weight));
	}
	calculatePrice(weight) {
		return weight * 1000;
	}
	get totalPrice() {
		return this.biaya + this.#pajak;
	}
}
const ongkosKirimPasti = new OngkirSecured(20);
console.log(ongkosKirimPasti.totalPrice); // 21000
ongkosKirimPasti.pajak = 0; // value can't changed by outsider
console.log(ongkosKirimPasti.totalPrice); // 21000

// Inheritance
// legacy the property to change the value by create child from its class / code reusability

// example
// class
class People {
	constructor(name, age) {
		(this.name = name), (this.age = age), (this.job = "No Job");
	}
	get getJob() {
		return this.job;
	}
}
// child class
class PersonWithJob extends People {
	constructor(name, age, job) {
		// super() is same with new Class()
		super(name, age), (this.job = job);
	}
}
const someOne = new People("Joker", 39);
const someBody = new PersonWithJob("Batman", 35, "Vigilante");
console.log(someOne.getJob); // No Job
console.log(someBody.getJob); // Vigilante

// Polymorphism
// legacy the property to change the method by create child from its class / code reusability

// example
class Indonesian {
	constructor(name) {
		this.name = name;
	}
	greeting() {
		return `Halo, ${this.name} selamat datang di JavaScript!`;
	}
}
class English extends Indonesian {
	constructor(name) {
		super(name);
	}
	greeting() {
		return `Hi, ${this.name} welcome to JavaScript!`;
	}
}
const bahasaIndonesia = new Indonesian("Joko");
const english = new English("Jake");
console.log(bahasaIndonesia.greeting()); // Halo, Joko selamat datang di JavaScript!
console.log(english.greeting()); // Hi, Jake welcome to JavaScript!

// Abstraction
// trick to hiding the detailed when creating object / code concept
