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

// Dates Method

// example new Date()
console.log(d.toString()); // Tue Mar 12 2024 00:04:08 GMT+0700 (Western Indonesia Time)
console.log(d.toUTCString()); // Mon, 11 Mar 2024 17:00:00 GMT
console.log(d.toDateString()); // Tue Mar 12 2024
console.log(d.toISOString()); // 2024-03-11T17:00:00.000Z

// Dates Format

// example new Date("YYYY-MM-DD") ISO Date
let dateFormat = new Date("2024-03-12");
console.log(dateFormat); // Tue Mar 12 2024 00:00:00 GMT+0700 (Western Indonesia Time)
dateFormat = new Date("2024-03");
console.log(dateFormat); // Fri Mar 01 2024 00:00:00 GMT+0700 (Western Indonesia Time)
dateFormat = new Date("2024");
console.log(dateFormat); // Mon Jan 01 2024 07:00:00 GMT+0700 (Western Indonesia Time)
dateFormat = new Date("2024-03-11T17:00Z");
console.log(dateFormat); // Tue Mar 12 2024 00:00:00 GMT+0700 (Western Indonesia Time)

// example new Date("MM/DD/YYYY") Short Date
dateFormat = new Date("01/31/2025");
console.log(dateFormat); // Fri Jan 31 2025 00:00:00 GMT+0700 (Western Indonesia Time)

// example new Date("Mth DD YYYY")
dateFormat = new Date("Jan 31 2025");
console.log(dateFormat); // Fri Jan 31 2025 00:00:00 GMT+0700 (Western Indonesia Time)
dateFormat = new Date("31 Jan 2025");
console.log(dateFormat); // Fri Jan 31 2025 00:00:00 GMT+0700 (Western Indonesia Time)
dateFormat = new Date("31 JANua 2025");
console.log(dateFormat); // Fri Jan 31 2025 00:00:00 GMT+0700 (Western Indonesia Time)
dateFormat = new Date("31, Januari, 2025");
console.log(dateFormat); // Fri Jan 31 2025 00:00:00 GMT+0700 (Western Indonesia Time)

// example get Date

// example getTime()
console.log(d.getTime()); // this miliseconds from Jan 01 1970 07:00:00 / 1710236044671

// example getDate()
console.log(d.getDay()); // this day / 2 from index 0
console.log(d.getDate()); // this date / 12
console.log(d.getMonth()); // this month / 2 from index 0
console.log(d.getFullYear()); // this year / 2024

// example how to rename the day
const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
let hariIni = hari[d.getDay()];
console.log(hariIni); // this day / Selasa

// example set Date

// example setTime
d.setFullYear(2020);
console.log(d); // set the date but the year from 2020
d.setHours(23);
console.log(d); // set the date but the hour from 23 from index 0
d.setMinutes(59);
console.log(d); // set the date but the minutes from 59 from index 0

// example setFullYear
d.setTime(1000000000000);
console.log(d); // set the date from Jan 01 1970 07:00:00 + 1000000000000 miliseconds
