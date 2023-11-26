var document = {
  write() {},
};

// TODO LESSON 1

// person is object, name until height is properties
var person = {
  name: "John",
  age: 31,
  favColor: "green",
  height: 183,
};

// call and output the objects
console.log(person);
let object1 = person.name; // output 'John'
let object2 = person.height; // output 183
let object3 = person["age"]; // output 31
let object4 = person["name"]; // output 'John'
let object5 = person["favColor"]; // output 'green'
console.log(object1, object2, object3, object4, object5);

// count how many number of character in a property or string
console.log(person.favColor.length); // output 5
document.write(`There is ${person.favColor.length} character `); // output 5 character di browser

// calculate cubed volume

function volumeCubed(p, l, t) {
  return p * l * t;
}

var cubed = {
  p: 250,
  l: 100,
  t: 500,
};

console.log(volumeCubed(cubed.p, cubed.l, cubed.t));
document.write(`Volume ${volumeCubed(cubed.p, cubed.l, cubed.t)} `);

// TODO LESSON 2

var person = {
  name: "John",
  age: 31,
  favColor: "green",
  height: 183,
};

// call old person
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.favColor);
console.log(person.height);

// change value properties in the object of person
function newPerson(name, age, color, height) {
  person.name = name;
  person.age = age;
  person.favColor = color;
  person.height = height;
}

// create a construction function
newPerson("Willy", 18, "white", 200);

// call new person
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.favColor);
console.log(person.height);

// test case
var flightIs = {
  numberIs: "",
  statusIs: "",
};

function flightAnnouncement(flightNumber, flightStatus) {
  flightIs.numberIs = flightNumber;
  flightIs.statusIs = flightStatus;
}

flightAnnouncement("NGT 929", "landed!");

console.log(`The Flight ${flightIs.numberIs} has ${flightIs.statusIs} `);
document.write(`The Flight ${flightIs.numberIs} has ${flightIs.statusIs} `);

flightAnnouncement("Boeing 707", "delayed!");

console.log(`The Flight ${flightIs.numberIs} has ${flightIs.statusIs} `);
document.write(`The Flight ${flightIs.numberIs} has ${flightIs.statusIs} `);

// TODO LESSON 3
