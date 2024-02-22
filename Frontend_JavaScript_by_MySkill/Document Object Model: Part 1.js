// HTML DOM
// example
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element,
// paragraphs[1] is the second <p> element, etc
alert(
  paragraphs[0].nodeName +
    " Hello World! This is the example of alert using HTML DOM"
);

// call an url & document
let urlOfTheWeb = document.URL;
console.log(urlOfTheWeb + " Hello World! This is the example of HTML DOM");
let treeOfTheWeb = document;
console.log(treeOfTheWeb);

// selector elements
// element.innerHTML = new html content // is used to change the inner HTML of an element
// element.attribute = new value // is used to change the attribute value of an element
// element.style.property = new style // is used to change the style of an element
// element.setAttribute(attribute, value) // is used to change the attribute of an element
