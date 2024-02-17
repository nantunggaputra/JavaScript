// Not (!)
console.log(!1); // false
console.log(!0); // true
const a = false;
const b = true;
console.log(!a); // true
console.log(!b); // false

// Null (??)
let user;
console.log(user ?? "Anonymous"); // Anonymous
user = "Nan";
console.log(user ?? "Anonymous"); // Nan
