// conditional operator
let age = 10;
var identityCardAllowed = age >= 17 ? true : false; // detailed version
console.log(identityCardAllowed);
var identityCardAllowed = age >= 17; // shorted version
console.log(identityCardAllowed);

// boolean coversion
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

// if, if else, if else if
let time = 15;
const morning = "Good Morning! Have a nice day!";
const afternoon = "Good Afternoon! Do you want to lunch?";
const evening = "Good Evening! It's cold out of there.";
const night = "Good Night! Sweet Dream, Honey.";
// v No Result
if (time <= 12) {
  console.log(morning);
}
// ^ No Result
// v Result = Good Evening! It's cold out of there.
if (time <= 12) {
  console.log(morning);
} else {
  console.log(evening);
}
// ^ Result = Good Evening! It's cold out of there.
// v Result = Good Afternoon! Do you want to lunch?
if (time <= 12) {
  console.log(morning);
} else if (time > 12 && time <= 16) {
  console.log(afternoon);
} else if (time > 16 && time <= 21) {
  console.log(evening);
} else {
  console.log(night);
}
// ^ Result = Good Afternoon! Do you want to lunch?
