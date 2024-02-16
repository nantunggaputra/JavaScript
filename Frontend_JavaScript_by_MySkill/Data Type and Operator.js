// static type (primitive type)
// int x = 5
// string y = "abc"
const x = 5;
const names = "abc";

// dynamic type (primitive type)
let message = "hello";
message = 12345;
console.log(message);

// number type
let numb = 1;
numb = 0.5;
numb = Infinity;
numb = NaN;
console.log(numb);

// sum of number type
let a = 100;
let b = 23.45;
let c = a * b;
let d = b / a;
let e = a + b;
let f = e - a;
console.log(c); // Result = 2345
console.log(d); // Result = 0.2345
console.log(e); // Result = 123.45
console.log(f); // Result = 23.450000000000003
console.log(f.toFixed(2)); // Result = 23.45
let j = NaN + 1;
let k = 3 * NaN;
let l = "Not a Number" / 2 - 1;
let m = 1 / 0;
console.log(j); // Result = NaN
console.log(k); // Result = NaN
console.log(l); // Result = NaN
console.log(m); // Result =  Infinity

// BigInt
const valueBigInt = 933333333333333333n;
const result1 = valueBigInt + 1n;
console.log(result1); // Not Error
// const result2 = valueBigInt + 1;
// console.log(result2); // Error

// string
let hari = "";
hari = "Jum'at"; // Not Error
// hari = 'Jum'at' // Error
console.log(hari);
let tanya = "";
tanya = "'Apa?', katanya."; // Not Error
// tanya = ""Apa?", katanya."; // Error
console.log(tanya);
let sum = 0;
sum = "5 + 5";
console.log(sum);
sum = `5 + 5`;
console.log(sum);
sum = `${5 + 5}`;
console.log(sum);

// boolean
let isValidEntry = true;
let nameFieldChecked = false;
let isGreater = 4 > 1;
console.log(isGreater);
if (isValidEntry) {
  console.log(true);
}

// null
let score = null;
console.log(score);

// undefined
let point;
console.log(point);

// object (non-primitive type)
const student = {
  firstName: "Nantungga",
  lastName: "Putra",
  age: 26,
};
console.log(student);

// array (primitive type)
const elements = ["water", "earth", "fire", "air"];
console.log(elements);
console.log(elements.length);
console.log(elements[0]);
console.log(elements[1]);
console.log(elements[2]);
console.log(elements[3]);

// TypeOf
console.log(typeof x);
console.log(typeof names);
console.log(typeof message);
console.log(typeof a);
console.log(typeof j);
console.log(typeof m);
console.log(typeof hari);
console.log(typeof tanya);
console.log(typeof isGreater);
console.log(typeof score);
console.log(typeof point);
console.log(typeof student);
console.log(typeof elements);
