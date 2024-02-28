// string escape "this" and 'this' using \
let sentence = "Hello World! We are \"Family\"! We are Fairy Tail!";
console.log(sentence);
let message = 'Select \'Mission\'s\' level :'
console.log(message)

// string character length
console.log("The first sentence is " + sentence.length + " characters")
console.log("The second sentence is " + message.length + " characters")

// string extraction using slice
// example slice(start [Result = index], end [Result = index-1])
console.log(sentence.slice(0, 12)) // Hello World!
console.log(sentence.slice(0, 29)) // Hello World! We are "Family"!
console.log(sentence.slice(0, 48)) // Hello World! We are "Family"! We are Fairy Tail!
console.log(message.slice(7, 18)) // 'Mission's'
// example slice(start [Result = index] until string complete)
console.log(message.slice(7)) // 'Mission's' level :
// example slice(-start [Result = -index+1], end [Result = -index])
console.log(message.slice(-19, -8)) // 'Mission's'
console.log(message.slice(-7, -2)) // level
// example slice(start [Result = index], end [Result = index-1])
console.log(sentence.slice(0, 12)) // Hello World!

// string extraction using substring
// example substring(-start [Result = index[0]], end [Result = index-1])
console.log(message.substring(-7, 6)) // Select
// example substring(start [Result will be end = index-1], -end [Result will be start = index[0]])
console.log(message.substring(7, -6)) // Select
// example substring(-start [Result = index[0]], -end [Result = index[0]])
console.log(message.substring(-7, -6)) // 

// string extraction using substr
// example substr(start [Result = index], length)
console.log(message.substr(7, 11)) // 'Mission's'
console.log(message.substr(7, 1)) // '
// example substr(start [Result = index] until string complete)
console.log(message.substr(7)) // '

// string replace