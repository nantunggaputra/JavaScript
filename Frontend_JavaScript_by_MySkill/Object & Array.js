// object (non-primitive type)
const person = {
  firstName: "Nantungga",
  lastName: "Putra",
  age: 26,
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person["lastName"]);
console.log(person["age"]);

// add property to object
person.status = "Menikah";
person.isMarried = true;
console.log(person);

// delete property from object
delete person.status;
console.log(person);

// make function using object
function makeUser(userName, userAge) {
  return {
    name: userName,
    age: userAge,
  };
}
let user = makeUser("Ummar", 40);
console.log(user);
console.log(user.name);
console.log(user.age);
function makeUser2(name, age) {
  return {
    name,
    age,
  };
}
let user2 = makeUser2("Utsman", 50);
console.log(user2);
console.log(user2.name);
console.log(user2.age);

// make function using variable and object
function luasSegitiga(alas, tinggi) {
  a = alas;
  t = tinggi;
  luas = (1 / 2) * a * t;
  return {
    luas,
  };
}
let hitungLuasSegitiga = luasSegitiga(15, 40);
console.log(`Luas Segitiga : ${hitungLuasSegitiga.luas}`);

// property existence using in
console.log("isMarried" in person); // true
console.log("name" in user); // true
console.log("name" in user2); // true
console.log("a" in hitungLuasSegitiga); // false
console.log("t" in hitungLuasSegitiga); // false
console.log("luas" in hitungLuasSegitiga); // true

// for loop in
for (let key in person) {
  console.log(key);
}
for (let key in person) {
  console.log(person[key]);
}

// array (primitive type)
let numbers = [1, 2, 3, 4, 5];

// index
let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Mango
console.log(fruits[3]); // undefined
fruits[2] = "Durian";
fruits[3] = "Banana";
console.log(fruits[2]); // Durian
console.log(fruits[3]); // Banana
fruits[5] = "Pear";
console.log(fruits); // ['Apple', 'Orange', 'Durian', 'Banana', undefined, 'Pear']
fruits.shift(); // remove first element
console.log(fruits); // ['Orange', 'Durian', 'Banana', undefined, 'Pear']
fruits.pop(); // remove last element
console.log(fruits); // ['Orange', 'Durian', 'Banana', undefined]
let removedFruit = fruits.shift(); // take removed first element
console.log(removedFruit); // Orange
console.log(fruits); // ['Durian', 'Banana', undefined]

// length of array
console.log(fruits.length); // 3
fruits[3] = "Grapes";
console.log(fruits.length); // 4

// concat, indexOf, includes, slice, sort
let otherFruits = ["Lemon", "Blueberry"];
let concatFruits = fruits.concat(otherFruits); // concat
console.log(concatFruits); // ['Durian', 'Banana', …, 'Grapes', 'Lemon', 'Blueberry']
let positionGrape = fruits.indexOf("Grapes"); // indexOf
console.log(positionGrape); // 3
let includedWatermelon = fruits.includes("Watermelon"); // includes
console.log(includedWatermelon); // false
let newFruits = ["Fruit A", "Fruit B", "Fruit C", "Fruit D"];
const slicedNewFruitsFromFruitB = newFruits.slice(1); // slice
console.log(slicedNewFruitsFromFruitB); // ['Fruit B', 'Fruit C', 'Fruit D']
const slicedNewFruitsFromFruitC = newFruits.slice(2); // slice
console.log(slicedNewFruitsFromFruitC); // ['Fruit C', 'Fruit D']
let sortedNewFruits = newFruits.sort(); // sorted
console.log(sortedNewFruits); // ['Fruit A', 'Fruit B', 'Fruit C', 'Fruit D']
