// Assignment Array

// example
const [first, second, third = "something else"] = ["coding", "web developing"];
console.log(first); // coding
console.log(second); // web developing
console.log(third); // something else
// // same with Traditional Array
// const hobbies = ["coding", "web developing"];
// console.log(hobbies[0]); // coding
// console.log(hobbies[1]); // web developing
// console.log(hobbies[2]); // undefined

// example
const { carName, manufacture, topSpeed } = {
	carName: "Civic",
	manufacture: "Honda",
	topSpeed: "180km/h",
};
console.log(carName, manufacture, topSpeed); // Civic Honda 180km/h
// // same with Traditional Object
// const car = {
// 	carName: "Civic",
// 	manufacture: "Honda",
// 	topSpeed: "180km/h",
// };
// const carName = car.carName;
// const manufacture = car.manufacture;
// const topSpeed = car.topSpeed;
// console.log(carName, manufacture, topSpeed); // Civic Honda 180km/h
