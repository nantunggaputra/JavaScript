// HTML DOM
// selector elements
// document.createElement(element) // is used to create an element in HTML
// document.removeChild(element) // is used to remove an element in HTML
// document.appendChild(element) // is used to add an element in HTML
// document.replaceChild(new, old) // is used to replace an element in HTML
// document.write(text) // is used to write into the HTML output stream

// example
// make function to body
document.body.onload = addElement;
function addElement() {
	// create a new div element
	const newDiv = document.createElement("div");
	// give it some content
	const newContent = document.createTextNode("This is new text appears here.");
	// add the text node to newly created div
	newDiv.appendChild(newContent);
	// add the newly created element and its content using insertBefore / no nested
	const currentDiv = document.getElementById("container");
	document.body.insertBefore(newDiv, currentDiv);
}

// example
// make function to body
function addTitle() {
	// create a new div element
	let newDivTitle = document.createElement("div");
	// give it some content
	let textTitle = document.createTextNode("How to make a coffee :");
	// add the text node to newly created div
	newDivTitle.appendChild(textTitle);
	// add the newly created element and its content using insertBefore / no nested
	currentUl = document.getElementById("makecoffee");
	document.body.insertBefore(newDivTitle, currentUl);
}
// make function to body
function addWater() {
	// create a new li element
	let liWater = document.createElement("li");
	// give it some content
	let textWater = document.createTextNode("Water");
	// add the text node to newly created li
	liWater.appendChild(textWater);
	// add the newly created element and its content using appendChild / nested
	currentUl = document.getElementById("makecoffee");
	currentUl.appendChild(liWater);
}

// style property
// example
function changeBgColor() {
	document.getElementById("makecoffee").style.textDecoration = "underline";
	document.getElementById("makecoffee").style.backgroundColor = "burlywood";
}
// example
function showTheStyle() {
	var x = document.getElementsByTagName("style")[0];
	document.getElementById("style").innerHTML = x.innerHTML;
}

// addEventListener
let alertId = document.getElementById("alert");
// example
alertId.addEventListener("click", alertFunction);
alertId.addEventListener("click", innerHTMLFunction);
function alertFunction() {
	alert("This alert using addEventListener method.");
}
function innerHTMLFunction() {
	document.getElementById("alert-complete").innerHTML = "Your alert has been showed up!";
}
// example
alertId.addEventListener("click", function () {
	sumFunction(10, 10);
});
function sumFunction(a, b) {
	document.getElementById("sum").innerHTML = `${a * b}!`;
}
