// display & button declaration with DOM
const displayHistory = document.querySelector(".display-history");
const display = document.querySelector(".display-input");
const tempResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const clearLast = document.querySelector(".last-entity-clear");

// display initiation
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

// number iteration
numbers.forEach((number) => {
	number.addEventListener("click", (e) => {
		// dot input just once
		if (e.target.innerText === "." && !haveDot) {
			haveDot = true;
		} else if (e.target.innerText === "." && haveDot) {
			return;
		}
		console.log(e.target.innerText);
		// display input
		dis2Num += e.target.innerText;
		if (dis2Num.length > 9) {
			dis2Num = parseFloat(dis2Num).toExponential(3);
		} else {
			dis2Num = parseFloat(dis2Num);
		}
		display.innerText = dis2Num;
	});
});

// operation iteration
operations.forEach((operation) => {
	operation.addEventListener("click", (e) => {
		// condition First
		if (dis2Num === "") return;
		// dot input once again
		haveDot = false;
		// condition Next
		const operationName = e.target.innerText;
		if (dis1Num && dis2Num && lastOperation) {
			mathOperation();
		} else {
			if (dis2Num.length > 7) {
				result = parseFloat(dis2Num).toExponential(3);
			} else {
				result = parseFloat(dis2Num);
			}
		}
		clearVar(operationName);
		lastOperation = operationName;
	});
});

// clearVar function
function clearVar(name = "") {
	if (displayHistory.innerText.length > 25) {
		displayHistory.innerText = "";
		dis1Num = result + " ";
	} else {
		dis1Num = dis1Num + dis2Num + " " + name + " ";
	}
	displayHistory.innerText = dis1Num;
	display.innerText = "";
	dis2Num = "";
	tempResult.innerText = result;
}

// mathOperation function
function mathOperation() {
	if (lastOperation === "x") {
		result = parseFloat(result) * parseFloat(dis2Num);
		result = result.toExponential(3);
	} else if (lastOperation === "/") {
		result = parseFloat(result).toFixed(8) / parseFloat(dis2Num);
		result = result.toFixed(8);
		result = result.toExponential(3);
	} else if (lastOperation === "+") {
		result = parseFloat(result) + parseFloat(dis2Num);
		result = result.toExponential(3);
	} else if (lastOperation === "-") {
		result = parseFloat(result) - parseFloat(dis2Num);
		result = result.toExponential(3);
	}
}
