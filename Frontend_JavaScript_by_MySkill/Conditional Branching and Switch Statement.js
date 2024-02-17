// conditional operator
let age = 10;
var identityCardAllowed = age >= 17 ? true : false; // detailed version
console.log(identityCardAllowed);
var identityCardAllowed = age >= 17; // shorted version
console.log(identityCardAllowed);

// boolean conversion
if (0) {
  console.log(false); // not executed
}
if (1) {
  console.log(true); // executed
}
var year = 2024;
let cond = year == 2024;
if (cond) {
  // executed if year == 2024
  console.log("Happy New Year");
}
