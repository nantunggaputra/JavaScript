// number
// example
let a = 12300000;
let b = 123e5;
console.log(b); // 12300000
// example
a = 0.00123;
b = 123e-5;
console.log(b); // 0.00123
// example
a = 999999999999999; // 15 digit => 999999999999999
b = 9999999999999999; // 16 digit => 10000000000000000
console.log(b); // 10000000000000000
// example
a = 0.2 + 0.1;
console.log(a); // 0.30000000000000004
console.log(a.toFixed(1)); // 0.3
b = (0.2 * 10 + 0.1 * 10) / 10;
console.log(b); // 0.3
// example
a = 100;
b = "10";
c = a + b;
console.log(c); // 10010
console.log(typeof c); // string
c = a * b;
console.log(c); // 1000
console.log(typeof c); // number
c = a / b;
console.log(c); // 10
console.log(typeof c); // number
c = a - b;
console.log(c); // 90
console.log(typeof c); // number
// example
a = 100;
b = 23;
c = a + b;
c = c.toString();
console.log(c); // 123
console.log(typeof c); // string
// example
a = 9656;
console.log(a.toExponential()); // 9.656e+3
console.log(a.toExponential(2)); // 9.66e+3
console.log(a.toExponential(4)); // 9.6560e+3
a = 9.656;
console.log(a.toExponential()); // 9.656e+0
console.log(a.toExponential(2)); // 9.66e+0
console.log(a.toExponential(4)); // 9.6560e+0
// example
a = 9.656;
console.log(a.toFixed()); // 10
console.log(a.toFixed(2)); // 9.66
console.log(a.toFixed(4)); // 9.6560
// example
a = 9.54567;
console.log(a.toPrecision()); // 9.54567
console.log(a.toPrecision(2)); // 9.5
console.log(a.toPrecision(4)); // 9.546

// math
// example round
console.log(Math.round(-4.4)); // -4
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.6)); // 5
// example up
console.log(Math.ceil(-4.4)); // -4
console.log(Math.ceil(4.4)); // 5
console.log(Math.ceil(4.5)); // 5
console.log(Math.ceil(4.6)); // 5
// example down
console.log(Math.floor(-4.4)); // -5
console.log(Math.floor(4.4)); // 4
console.log(Math.floor(4.5)); // 4
console.log(Math.floor(4.6)); // 4
// example first integer
console.log(Math.trunc(-4.4)); // -4
console.log(Math.trunc(4.4)); // 4
console.log(Math.trunc(4.5)); // 4
console.log(Math.trunc(4.6)); // 4
console.log(Math.trunc(9.9)); // 9
console.log(Math.trunc(0.9)); // 0
// example pow & sqrt
console.log(Math.pow(5, 2)); // 25
console.log(Math.pow(3, 3)); // 27
console.log(Math.pow(2, 5)); // 32
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(64)); // 8
console.log(Math.sqrt(100)); // 10
// example min & max
console.log(Math.min(0, 150, 30, -200, 20, -8)); // -200
console.log(Math.max(0, 150, 30, -200, 20, -8)); // 150
// example random
console.log(Math.random()); // random number 0 s/d 1
console.log(Math.ceil(Math.random() * 10)); // random number 1 s/d 10
console.log(Math.floor(Math.random() * 10)); // random number 0 s/d 9
