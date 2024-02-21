// function
// v example
function greet() {
  console.log("Hello World!");
}
greet();
// ^ example
// v example nested function
function introduction() {
  greet();
  console.log("My Name is Nantungga Putra");
}
introduction();
// ^ example nested function
// v example with default value
function showMessage(from, text = "(Waiting for messages...)", time = -1) {
  if (time >= 0) {
    timeIn24Hours = `(${time.toFixed(2)} WIB)`;
  }
  console.log(from + ":", text, timeIn24Hours);
}
showMessage("Andro", "Assalamu'alaikum, kak. Apa kabar?", 18);
showMessage("Nan", "Wa'alaikumussalam, Alhamdulillah baik, bang.", 18.3);
showMessage("Andro");
// ^ example with default value
// v example
function sumThisNumbers(a, b) {
  console.log(`${a + b} century`);
}
sumThisNumbers(2000, 24);
// ^ example
// v example with return value
function sumOfNumbers1(a, b) {
  return a + b;
}
sumResult1 = sumOfNumbers1(20, 6);
console.log(sumResult1);
// ^ example with return value
// v example with return value
function sumOfNumbers2(a, b) {
  return {
    sum: a + b,
  };
}
sumResult2 = sumOfNumbers2(20, 6);
console.log(sumResult2.sum);
// ^ example with return value
// v example with return value
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
let age = 26;
if (checkAge(age)) {
  console.log("Access granted");
} else {
  console.log("Not Allowed");
}
// ^ example with return value
