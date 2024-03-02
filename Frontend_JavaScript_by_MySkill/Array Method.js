// array
// example string array
let cars = ["Toyota", "BMW", "Lamborghini", "Ferrari"];
console.log(cars.toString()); // Toyota,BMW,Lamborghini,Ferrari
console.log(cars.join(" - ")); // Toyota - BMW - Lamborghini - Ferrari
console.log(cars.join(" & ")); // Toyota & BMW & Lamborghini & Ferrari

// example pop & push
let fruits = ["Apple", "Orange", "Mango"];
let getLastFruit = fruits.pop(); // remove last element
console.log(fruits); // ['Apple', 'Orange']
console.log(getLastFruit); // Mango
let currentFruits = fruits.push("Banana"); // add last element
console.log(fruits); // ['Apple', 'Orange', 'Banana']
console.log(currentFruits); // 3

// example shift & unshift
let getFirstFruit = fruits.shift(); // remove first element
console.log(fruits); // ['Orange', 'Banana']
console.log(getFirstFruit); // Apple
let currentFruits2 = fruits.unshift("Pear"); // add first element
console.log(fruits); // ['Pear', 'Orange', 'Banana']
console.log(currentFruits2); // 3

// example change element
fruits[0] = "Lemon";
console.log(fruits); // ['Lemon', 'Orange', 'Banana']
fruits[fruits.length] = "Durian";
console.log(fruits); // ['Lemon', 'Orange', 'Banana', 'Durian']
fruits[5] = "Watermelon";
console.log(fruits); // ['Lemon', 'Orange', 'Banana', 'Durian', undefined, 'Watermelon']

// example concat element
let otherFruits = ["Strawberry", "Blueberry"];
fruits = fruits.concat(otherFruits); // concat
console.log(fruits); // ['Lemon', 'Orange', 'Banana', 'Durian', undefined, 'Watermelon', 'Strawberry', 'Blueberry']

// example delete element
delete fruits[0]; // make element in index 0 empty / undefined
delete fruits[5]; // make element in index 6 empty / undefined
console.log(fruits); // [undefined, 'Orange', 'Banana', 'Durian', undefined, undefined, 'Strawberry', 'Blueberry']

// example splice element
otherFruits.splice(1, 0, "Raspberry"); // add element in index 1, delete 0 element after that
console.log(otherFruits); // ['Strawberry', 'Raspberry', 'Blueberry']
otherFruits.splice(2, 0, "Cherry"); // add element in index 2, delete 0 element after that
console.log(otherFruits); // ['Strawberry', 'Raspberry', 'Cherry', 'Blueberry']
otherFruits.splice(0, 1); // empty 1 element from index 0
console.log(otherFruits); // ['Raspberry', 'Cherry', 'Blueberry']
fruits.splice(0, 1); // empty 1 element from index 0
console.log(fruits); // ['Orange', 'Banana', 'Durian', undefined, undefined, 'Strawberry', 'Blueberry']
fruits.splice(3, 2); // empty 2 element from index 3
console.log(fruits); // ['Orange', 'Banana', 'Durian', 'Strawberry', 'Blueberry']

// example slice element
let slicedNewFruitsFromDurian = fruits.slice(2); // slice element from index 2
console.log(slicedNewFruitsFromDurian); // ['Durian', 'Strawberry', 'Blueberry']
let slicedNewFruitsFromBananaToStrawberry = fruits.slice(1, 4); // slice element from index 1 until before index 4
console.log(slicedNewFruitsFromBananaToStrawberry); // ['Banana', 'Durian', 'Strawberry']
