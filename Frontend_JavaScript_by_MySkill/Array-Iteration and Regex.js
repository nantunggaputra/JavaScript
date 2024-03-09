// array iteration

// example for Each()
const finalScore = [95, 73, 73, 80, 92];
finalScore.forEach(iterationFunction);
function iterationFunction(value, index, array) {
	// console.log(value);
	// // 95
	// // 73
	// // 73
	// // 80
	// // 92
	console.log(value, index);
	// 95 0
	// 73 1
	// 73 2
	// 80 3
	// 92 4
}

// example map()
const doubleFinalScore = finalScore.map(mapIterationFunction);
function mapIterationFunction(value) {
	return value * 2;
}
console.log(doubleFinalScore); // [190, 146, 146, 160, 184]
const gradeFinalScore = finalScore.map(mapIterationFunction2);
function mapIterationFunction2(value) {
	if (value <= 95 && value > 90) {
		return (value = "A+");
	} else if (value <= 90 && value > 75) {
		return (value = "A");
	} else if (value <= 75 && value > 70) {
		return (value = "B");
	} else if (value <= 70 && value > 60) {
		return (value = "C");
	}
}
console.log(gradeFinalScore); // ['A+', 'B', 'B', 'A', 'A+']

// example filter()
const greatestFinalScore = finalScore.filter(mapIterationFunction3);
function mapIterationFunction3(value) {
	return value > 90;
}
console.log(greatestFinalScore); // [95, 92]

// example every() & some()
const everyScoreIsGreatestScore = finalScore.every(mapIterationFunction3);
console.log(everyScoreIsGreatestScore); // false
const someScoreIsGreatestScore = finalScore.some(mapIterationFunction3);
console.log(someScoreIsGreatestScore); // true

// example find()
const firstNumberOfGreatestFinalScore = finalScore.find(mapIterationFunction4);
function mapIterationFunction4(value) {
	return value > 90;
}
console.log(firstNumberOfGreatestFinalScore); // 95

// example indexOf()
let fruits = ["Apple", "Orange", "Mango"];
let positionMango = fruits.indexOf("Mango");
console.log(positionMango); // 2
let positionmango = fruits.indexOf("mango");
console.log(positionmango); // -1
positionmango = fruits.indexOf(/mango/i);
console.log(positionmango); // -1
let positionPear = fruits.indexOf("Pear");
console.log(positionPear); // -1

// regular expression

// syntax = /"pattern"/"modifiers"

// example of search(/myskill/i) ("myskill" is the search pattern, and "i" modify to case-insensitive)
let text = "Let's Visit MySkill to upgrade MySkill & YourSkill";
var regex = text.search("myskill");
console.log(regex); // -1
var regex = text.search(/myskill/i);
console.log(regex); // 12

// example of match(/MySkill/g) ("myskill" is the search pattern, and "g" modify to global match or all search pattern founded)
var regex = text.match(/myskill/g);
console.log(regex); // null
var regex = text.match(/MySkill/g);
console.log(regex); // ['MySkill', 'MySkill']

// example of match(/MySkill/m) ("myskill" is the search pattern, and "m" modify to one match or first search pattern founded)
text = "Let's\nVisit MySkill\nto upgrade MySkill & YourSkill";
var regex = text.match(/MySkill/m);
console.log(regex); // ['MySkill', index: 12, input: 'Let's Visit MySkill to upgrade MySkill & YourSkill', groups: undefined]

// example of test (to output true or false if there is the search pattern in the test variable)
var regex = /LL/i;
console.log(regex.test(text)); // true
var regex = /LL/;
console.log(regex.test(text)); // false
var regex = /ll/;
console.log(regex.test(text)); // true
var regex = /zzz/;
console.log(regex.test(text)); // false
var regex = /[a-zA-Z]/;
console.log(regex.test(text)); // true
var regex = /[0-9]/;
console.log(regex.test(text)); // false
var regex = /[A-Z|0-9]/;
console.log(regex.test(text)); // true
const passwordRules = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!@#$]){6,20}/g;
var userPassword = "whoami";
console.log(passwordRules.test(userPassword)); // false
var userPassword = "whoAmI#myname@2024";
console.log(passwordRules.test(userPassword)); // true
var userPassword = "whoami#myname@2024";
console.log(passwordRules.test(userPassword)); // false
var userPassword = "WhoAmImyname2024";
console.log(passwordRules.test(userPassword)); // true
var userPassword = "WhoAmImyname2024morethan20characters";
console.log(passwordRules.test(userPassword)); // false

// example of metacharacter
// 0-9
// a-z
// A-Z
// . find a single character
// \w find a word character
// \W find a non-word
// \d find a digit character
// \D find a non-digit
// \s find a non space character
// \S find a non whitespace
// \b find a match at the beginning or end of a word, example find "SE" use \bSE or SE\b
// \B find a match but not at the beginning or end of a word
// \0 find a NULL character
// \n find a new line character
// \f find a form feed character
// \r find a carriage return character
// \t find a tab character
