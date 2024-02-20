// switch
let size = "M";
// v Result = Medium
switch (size) {
  case "XS":
    console.log("Extra Small");
    break;
  case "S":
    console.log("Small");
    break;
  case "M":
    console.log("Medium");
    break;
  case "L":
    console.log("Large");
    break;
  case "XL":
    console.log("Extra Large");
    break;
  default:
    console.log("Please select the size!");
}
// ^ Result = Medium

// without code block
switch (new Date().getDay()) {
  case 6:
    console.log("It's Weekend");
    break;
  case 0:
    console.log("It's Weekend");
    break;
  default:
    console.log("You Need to work! It's Weekday");
}

// with code block
switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("You Need to work! It's Weekday");
    break;
  default:
    console.log("It's Weekend");
}

// without break
// v Result = greater than 2 greater than 1 greater than 0
let numb = 3;
switch (numb) {
  case 5:
    console.log("greater than 4");
  case 4:
    console.log("greater than 3");
  case 3:
    console.log("greater than 2");
  case 2:
    console.log("greater than 1");
  case 1:
    console.log("greater than 0");
}
// ^ Result = greater than 2 greater than 1 greater than 0

// strict comparison
let a = 100;
let b = "100";
switch (a) {
  case 100:
    console.log(`${100} in number type`);
    break;
  case 200:
    console.log(`${200} in number type`);
    break;
  case "100":
    console.log("One Hundred in string type");
    break;
  case "200":
    console.log("Two Hundred in string type");
    break;
}
