// Dates Object

// example new Date()
const d = new Date();
console.log(d);

// example new Date(year, mounth. day, hours, minutes, seconds, miliseconds)
const independenceDay = new Date(1945, 7, 17, 9, 0, 0, 0); // the month is count from index 0
console.log(independenceDay);
const independenceDay2 = new Date(1944, 19, 17, 9, 0, 0, 0); // the date is same with before
console.log(independenceDay2);
const independenceDay3 = new Date(1944, 18, 48, 9, 0, 0, 0); // the date is same with before
console.log(independenceDay3);

// example new Date(miliseconds)
let datePlusMiliseconds = new Date(1000);
console.log(datePlusMiliseconds); // the date from Jan 01 1970 07:00:00 + 1000 miliseconds
datePlusMiliseconds = new Date(1000000000000);
console.log(datePlusMiliseconds); // the date from Jan 01 1970 07:00:00 + 1000000000000 miliseconds

// example new Date(date string)
let dateString = new Date("Nove, 12 2006, 16:00:00");
console.log(dateString); // the string is case-insensitive
dateString = new Date("Nove, 12 2006, 4:00 pm");
console.log(dateString); // the date is same with before
dateString = new Date("12-Nove-2006, 4:00 pm");
console.log(dateString); // the date is same with before
