// for loop
for (let i = 0; i < 5; i++) {
  console.log(`i = ${i}`);
}
for (let j = 1; j <= 5; j++) {
  console.log(`j = ${j} Hello World`);
}
for (let i = 1; i <= 5; i++) {
  console.log(`${i} kali dijalankan pakai for`);
}
// while loop
let i = 0;
while (i < 5) {
  console.log(i + " kali dijalankan pakai while");
  i++;
}
let j = 5;
while (j >= 0) {
  switch (j) {
    case 5:
      console.log("Five");
      break;
    case 4:
      console.log("Four");
      break;
    case 3:
      console.log("Three");
      break;
    case 2:
      console.log("Two");
      break;
    case 1:
      console.log("One");
      break;
    case 0:
      console.log("Zero");
      break;
  }
  j--;
}
