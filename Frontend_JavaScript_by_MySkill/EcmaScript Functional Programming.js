// Functional Programming
// input as an argument, output from input function
// more effective to debugging

// example
function sum(nums) {
	const initial = 0;
	const output = nums.reduce((prev, current) => {
		// consolee.log(prev);
		return prev + current;
	}, initial);
	return output;
}
const numbers = [1, 2, 3, 4, 5];
const totalSum = sum(numbers);
console.log(totalSum);
// // same with Traditional Function
// const numbers = [1, 2, 3, 4, 5];
// const totalSum = 0;
// function sum() {
// 	for (let i = 0; i < numbers.length; i++) {
// 		totalSum = totalSum + numbers[i];
// 	}
// }
// sum();
// console.log(totalSum);

// High Order Function

// example filter() output is array
const users = [
	{ name: "Januar", age: 15 },
	{ name: "Febri", age: 10 },
	{ name: "Merry", age: 12 },
	{ name: "Avriel", age: 16 },
	{ name: "Mei-Mei", age: 9 },
];
const usersOver12 = users.filter((user) => user.age > 12);
console.log(usersOver12); // [{ name: "Januar", age: 15 }, { name: "Avriel", age: 16 }]

// example map() output is array
const alsoUsers = users.map((user) => `${user.name} berusia ${user.age}th`);
console.log(alsoUsers); // ['Januar berusia 15th', 'Febri berusia 10th', 'Merry berusia 12th', 'Avriel berusia 16th', 'Mei-Mei berusia 9th']

// example (reduce) output is acumulation of array's number
const sumAges = users.reduce((prev, current) => prev + current.age, 0);
console.log(sumAges); // 62
const averageAge = sumAges / users.length;
console.log(averageAge); // 12.4

// example curried()
const curriedMultiply = (panjang) => (lebar) => (jumlahKertasHVS) => panjang * lebar * jumlahKertasHVS;
console.log(curriedMultiply(7)(4)(10)); // 280
const luasKertasHVS = curriedMultiply(7)(4);
console.log(luasKertasHVS(15)); // 420
console.log(luasKertasHVS(30)); // 840
console.log(luasKertasHVS(3)); // 84
console.log(luasKertasHVS(5)); // 140
// // same with Traditional Multiply
// console.log(curriedMultiply(7)(4)(15)); // 420
// console.log(curriedMultiply(7)(4)(30)); // 840
// console.log(curriedMultiply(7)(4)(3)); // 84
// console.log(curriedMultiply(7)(4)(5)); // 140
