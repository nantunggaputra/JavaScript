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
