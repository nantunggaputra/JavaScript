// HTML DOM
// example
const paragraphs = document.querySelectorAll("p");
// // paragraphs[0] is the first <p> element,
// // paragraphs[1] is the second <p> element, etc
// alert(
//   paragraphs[0].nodeName +
//     " Hello World! This is the example of alert using HTML DOM"
// );

// call an url & document
let urlOfTheWeb = document.URL;
console.log("Hello World! This is the example of HTML DOM call an url :");
console.log(urlOfTheWeb);
let treeOfTheWeb = document;
console.log("This is the example of HTML DOM call a document :");
console.log(treeOfTheWeb);

// selector elements
// element.innerHTML = new html content // is used to change the inner HTML of an element
// element.attribute = new value // is used to change the attribute value of an element
// element.style.property = new style // is used to change the style of an element
// element.setAttribute(attribute, value) // is used to change the attribute of an element

// get element by id
const elementIntroduction = document.getElementById("introduction");
const elementIntroductionNothing = document.getElementById("nointroduction");
// what is in the id
console.log("what is in the id :");
console.log(elementIntroduction);
// add element from id="introduction" into element which id="demonstration"
document.getElementById("demonstration").innerHTML = "The text from the introduction nothing paragraph is: " + elementIntroduction.innerHTML;
// // if no element which id="nointroduction"
// document.getElementById("demonstration").innerHTML =
//   "The text from the introduction paragraph is: " +
//   elementIntroductionNothing.innerHTML;
// // Result = Uncaught TypeError: elementIntroductionNothing is null

// get elements by class
const elementIntroductionClass = document.getElementsByClassName("introduction_class");
// what is in the class
console.log("what is in the class :");
console.log(elementIntroductionClass);
// add element from first class="introduction_class" into element which id="demonstration_class_first"
document.getElementById("demonstration_class_first").innerHTML = "The text from the first introduction_class paragraph is: " + elementIntroductionClass[0].innerHTML;
// add element from second class="introduction_class" into element which id="demonstration_class_second"
document.getElementById("demonstration_class_second").innerHTML = "The text from the second introduction_class paragraph is: " + elementIntroductionClass[1].innerHTML;
// // if no third class which class="introduction_class"
// document.getElementById("demonstration_class_second").innerHTML =
//   "The text from the third introduction_class paragraph is: " +
//   elementIntroductionClass[2].innerHTML;
// // Result = Uncaught TypeError: elementIntroductionClass[2] is undefined

// get elements by tag name
const elementIntroductionTagNameP = document.getElementsByTagName("p");
const elementIntroductionTagNameLI = document.getElementsByTagName("li");
// what is in the tag
console.log("what is in the tag :");
console.log(elementIntroductionTagNameP);
console.log(elementIntroductionTagNameLI);
// add element from first p tag into element which id="demonstration_tag_name_p"
document.getElementById("demonstration_tag_name_p").innerHTML = "The text from the first p tag is: " + elementIntroductionTagNameP[0].innerHTML;
// add element from first li tag into element which id="demonstration_tag_name_li"
document.getElementById("demonstration_tag_name_li").innerHTML = "The text from the first li tag is: " + elementIntroductionTagNameLI[0].innerHTML;

// get element by query selector all
const elementIntroductionSelector = document.querySelectorAll("p.introduction_class");
// what is in the selector
console.log("what is in the selector :");
console.log(elementIntroductionSelector);
// add element from first p tag which class="introduction_class" into element which id="demonstration_selector_p_introduction_class"
document.getElementById("demonstration_selector_p_introduction_class").innerHTML = "The text from the first selector p.introduction_class is: " + elementIntroductionSelector[0].innerHTML;
