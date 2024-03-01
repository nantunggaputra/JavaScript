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
// example sensitive case
let newMessage = message.replace('Select', 'Your')
console.log(newMessage) // Your 'Mission's' level :
newMessage = message.replace('seLect', 'Your')
console.log(newMessage) // Select 'Mission's' level :
// example unsensitive case
newMessage = message.replace(/seLect/i, 'Your')
console.log(newMessage) // Your 'Mission's' level :
// example using global case but sensitive case
let newSentence = sentence.replace(/wE aRe/g, "She is")
console.log(newSentence) // Hello World! We are "Family"! We are Fairy Tail!
newSentence = sentence.replace(/We are/g, "She is")
console.log(newSentence) // Hello World! She is "Family"! She is Fairy Tail!
// example not using global case
newSentence = sentence.replace("We are", "She is")
console.log(newSentence) // Hello World! She is "Family"! We are Fairy Tail!

// string toUpperCase & toLowerCase
console.log(newMessage.toUpperCase()) // YOUR 'MISSION'S' LEVEL :
console.log(newMessage.toLowerCase().replace(/your/i, 'my')) // my 'mission's' level :

// string concat
// example
// Hello World! We are "Family"! We are Fairy Tail!
// Select 'Mission's' level :
let sentenceAndMessage = sentence.concat("\n", message)
console.log(sentenceAndMessage)
// example
// Hello World! We are "Family"! We are Fairy Tail! Select 'Mission's' level :
sentenceAndMessage = sentence.concat(" ", message)
console.log(sentenceAndMessage)
sentenceAndMessage = sentence + " " + message
console.log(sentenceAndMessage)

// string trim
let text1 = "       Hello World!           "
let text2 = "2024"
console.log(text1.concat(" ", text2)) //        Hello World!            2024
text1 = text1.trim()
console.log(text1.concat(" ", text2)) // Hello World! 2024

// string search
// example indexOf "Hello World! We are "Family"! We are Fairy Tail!"
console.log(sentence.indexOf("We")) // 13
console.log(sentence.indexOf("we")) // -1
console.log(sentence.indexOf("Natsu")) // -1
// example lastIndexOf "Hello World! We are "Family"! We are Fairy Tail!"
console.log(sentence.lastIndexOf("We")) // 30
console.log(sentence.lastIndexOf("we")) // -1
console.log(sentence.lastIndexOf("Lucy")) // -1
// example search "Hello World! We are "Family"! We are Fairy Tail!"
console.log(sentence.search("We")) // 13
console.log(sentence.search("we")) // -1
// example includes "Hello World! We are "Family"! We are Fairy Tail!"
console.log(sentence.includes("We")) // true
console.log(sentence.includes("we")) // false
// example startsWith "Hello World! We are "Family"! We are Fairy Tail!"
console.log(sentence.startsWith("Hello")) // true
console.log(sentence.startsWith("hello")) // false
console.log(sentence.startsWith("H")) // true
console.log(sentence.startsWith("h")) // false
