// function fizzBuzz(n) {
//     // Write your code here
//     for (let i=1; i<=n; i++) {
//         if (i%3 === 0 && i%5 !== 0) {
//             console.log("Fizz")
//         } else if (i%5 === 0 && i%3 !== 0) {
//             console.log("Buzz")
//         } else if (i%3 === 0 && i%5 === 0) {
//             console.log("FizzBuzz")
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzBuzz (30)

// // function main() {
// //   const n = parseInt(readLine().trim(), 10);

// //   fizzBuzz(n);
// // }







// process.stdout.write("Ini Percobaan ")
// process.stdout.write("Pertama")
// console.log("!")






// // var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// // var lines = input.split('\n');

// lines = [2200,
//     1020,
//     2022,
//     2002]

// let i

// for (i=0; i<=lines.length; i++) {
//     if (lines[i] === 2002) {
//         console.log("Acesso Permitido")
//         break
//     } else {
//         console.log("Senha Invalida")
//     }
// }






// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let password = 0; // Ganti dengan password yang diinginkan

// function checkPassword(input) {
//   if (parseInt(input) === password) {
//     console.log("Acesso Permitido");
//     rl.close();
//   } else {
//     console.log("Senha Invalida");
//     rl.question('Enter the password again: ', checkPassword);
//   }
// }

// rl.question('Enter the password: ', checkPassword);

















// var satu = "Enigma"
// var dua = "Camp"
// var tiga
// tiga = satu
// satu = dua
// dua = tiga

// console.log(dua, satu)






// let i

// for (i=1; i<21; i++) {
//   if (i%2 !== 0) {
//     console.log(i)
//   }
// }




// let nama = "irwan suwanto"
// let huruf = nama.split("")
// let i
// let j

// for (i=0; i<=huruf.length; i++) {
//   var sama

//   for (j=i+1; j<=huruf.length; j++) {
//     sama = huruf[j]
//     if (huruf[i] === sama) {
//       console.log(huruf[i])
//     }
//   } 
// }











var input = `3 2
1
2 3
1
3 1
2`

var lines = input.split("\n")

// TODO Code your solution here

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

// process.stdin.resume()
// process.stdin.setEncoding('utf8')

let i
let a = 0 // - The number of victories of Inter.
let b = 0 // - The number of victories of Gremio.
let e = 0 // - The number of Draws.
let score = 0
let eachScore = 0
let inter = 0
let gremio = 0
let interLead = 0
let gremioLead = 0
let empates = 0
let sum = 0
let interWin = "Inter venceu mais"
let gremioWin = "Gremio venceu mais"
let bothWin = "Não houve vencedor"

for (i=0; i<=lines.length; i++) {
    // console.log(lines)
    score = lines[i]
    // console.log(score)
    if (i % 2 === 0) {
        console.log("Novo grenal (1-sim 2-nao)")
        // console.log(lines[i])
        eachScore = score.split(" ")
        // console.log(eachScore[0], eachScore[1])
        inter = parseInt(eachScore[0])
        gremio = parseInt(eachScore[1])
        if (inter > gremio) {
            a = a + 1
        } else if (gremio > inter) {
            b = b + 1
        } else {
            e = e + 1
        }
        sum+=1
        if (parseInt(lines[i+1]) === 1) {
            /* console.log(`Inter = ${interLead}
Gremio = ${gremioLead}
Empates = ${empates}`) */
            continue
        } else if (parseInt(lines[i+1]) === 2) {
            console.log(`${sum} grenais`)
            interLead+=a
            gremioLead+=b
            empates+=e
            console.log(`Inter:${interLead}
Gremio:${gremioLead}
Empates:${empates}`)
            if (a > b) {
                console.log(interWin)
            } else if (b > a) {
                console.log(gremioWin)
            } else {
                console.log(bothWin)
            }
            break
        }
    }
}