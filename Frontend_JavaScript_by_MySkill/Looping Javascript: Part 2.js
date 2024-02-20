// do while loop
// example
let result = 0;
let i = 0;
do {
  i += 1;
  // i = 1 (loop) i = 2 (loop) i = 3 (loop) i = 4
  result = result + i;
  // result = 0+1 (loop) result = 1+2 (loop) result = 3+3 (loop) result = 6+4 (loop) result = 10+5
} while (i < 5);
console.log(result);
// example
let j = 0;
do {
  console.log("Hello World!");
  if (j % 2 == 0) console.log(j + " is even number");
  j++;
} while (j < 10);

// continue statement
// example
for (let i = 0; i < 10; i++) {
  if (i % 2 != 0) continue;
  console.log(i + " is even number");
}
// example
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i + " is odd number");
}

// for loop of
// example
const numbers = [100, 200, 300];
for (const number of numbers) {
  console.log(number);
}
// example
const array = ["A", "B", "C", "D", "E", "F"];
for (const key of array) {
  console.log(key);
}
