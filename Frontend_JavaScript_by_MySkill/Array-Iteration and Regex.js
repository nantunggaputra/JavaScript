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

// example indexOf()
