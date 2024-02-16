// var
var x = "hello";
var x = "world";
console.log(x);

// let
let y = "hello";
// let y = "world"; // Error
y = "world"; // No Error
console.log(y);

// const
const pi = 3.14;
// const pi = 22 / 7; // Error
// pi = 22 / 7; // Error
console.log(pi);

// scope variable
var a = 0;
let b = 0;
const c = 0;
if (true) {
  var a = 1;
  let b = 1;
  const c = 1;
}
console.log(a); // Not Apply Block Scope
console.log(b); // Apply Block Scope
console.log(c); // Apply Block Scope
{
  var j = 7;
  let k = 7;
  const l = 7;
}
{
  console.log(j);
  //   console.log(k); // Apply Block Scope / Error
  //   console.log(l); // Apply Block Scope / Error
}

// adding value or property in to an array or object with const
const obj = { id: 1, name: "Andi" };
obj.age = 20;
console.log(obj); // Not Error
// obj = () // Error
const arr = [10, 20, 30, 40];
arr.push(50);
console.log(arr); // Not Error
// arr = []; // Error
