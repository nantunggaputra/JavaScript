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
		// console.log(e.target.innerText);
		// display input
		dis2Num += e.target.innerText;
		if (dis2Num.length > 10) {
			dis2Num = parseFloat(dis2Num).toExponential(4);
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
			if (dis2Num.length > 8) {
				result = parseFloat(dis2Num).toExponential(4);
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
	if (displayHistory.innerText.length > 17) {
		displayHistory.innerText = "";
		dis1Num = result + " " + name + " ";
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
	} else if (lastOperation === "/") {
		result = parseFloat(result) / parseFloat(dis2Num);
	} else if (lastOperation === "+") {
		result = parseFloat(result) + parseFloat(dis2Num);
	} else if (lastOperation === "-") {
		result = parseFloat(result) - parseFloat(dis2Num);
	} else if (lastOperation === "%") {
		result = parseFloat(result) % parseFloat(dis2Num);
	}
	if ((result <= 9999999999 && result > 999999999) || (result >= -9999999999 && result <= -999999999)) {
		result = result.toFixed(0);
	} else if ((result <= 999999999 && result > 99999999) || (result > -999999999 && result <= -99999999)) {
		result = result.toFixed(1);
	} else if ((result <= 99999999 && result > 9999999) || (result > -99999999 && result <= -9999999)) {
		result = result.toFixed(2);
	} else if ((result <= 9999999 && result > 999999) || (result > -9999999 && result <= -999999)) {
		result = result.toFixed(3);
	} else if ((result <= 999999 && result > 99999) || (result > -999999 && result <= -99999)) {
		result = result.toFixed(4);
	} else if ((result <= 99999 && result > 9999) || (result > -99999 && result <= -9999)) {
		result = result.toFixed(5);
	} else if ((result <= 9999 && result > 999) || (result > -9999 && result <= -999)) {
		result = result.toFixed(6);
	} else if ((result <= 999 && result > 99) || (result > -999 && result <= -99)) {
		result = result.toFixed(7);
	} else if ((result <= 99 && result >= 9) || (result > -99 && result <= -9)) {
		result = result.toFixed(8);
	} else if ((result <= 9 && result >= 0) || (result > -9 && result <= -1)) {
		result = result.toFixed(9);
	}
	result = result.toString().replace(/(\.\d*?[1-9])0+$/, "$1");
	result = parseFloat(result);
	if (result > 9999999999 || result < -9999999999) {
		result = parseFloat(result).toExponential(4);
	}
}

// equal logic
equal.addEventListener("click", () => {
	if (!dis1Num || !dis2Num) return;
	haveDot = false;
	mathOperation();
	clearVar();
	dis1Num = "";
	displayHistory.innerText = `\n`;
	dis2Num = result;
	let equal = result;
	if (result > 9999999999 || result < -9999999999) {
		equal = parseFloat(result).toExponential(4);
	}
	display.innerText = equal;
	tempResult.innerText = "";
});

// clearAll logic
clearAll.addEventListener("click", () => {
	dis1Num = "";
	displayHistory.innerText = "0";
	dis2Num = "";
	display.innerText = "0";
	haveDot = false;
	result = "";
	tempResult.innerText = "0";
	lastOperation = "";
});

// clearLast logic
clearLast.addEventListener("click", () => {
	dis2Num = "";
	display.innerText = "0";
});

// keyboard accessibility logic
window.addEventListener("keydown", (e) => {
	if (e.key === "7" || e.key === "8" || e.key === "9" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "0") {
		clickButton(e.key);
	} else if (e.key === "*") {
		clickOperation("x");
	} else if (e.key === "/" || e.key === "+" || e.key === "-" || e.key === "%") {
		clickOperation(e.key);
	} else if (e.key === "Enter" || e.key === "=") {
		clickEqual();
	} else if (e.key === "c") {
		clickClearAll();
	} else if (e.key === "Backspace") {
		clickClearLast();
	}
});

// keyboard accessibility function
function clickButton(key) {
	numbers.forEach((button) => {
		if (button.innerText === key) {
			button.click();
		}
	});
}
function clickOperation(key) {
	operations.forEach((operation) => {
		if (operation.innerText === key) {
			operation.click();
		}
	});
}
function clickEqual() {
	equal.click();
}
function clickClearAll() {
	clearAll.click();
}
function clickClearLast() {
	clearLast.click();
}
