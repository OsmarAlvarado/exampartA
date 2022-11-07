//---Ex:1

// function sumPars(arr) {
//     let counter = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             counter += arr[i]
//         }

//     }
//     return counter
// }

// console.log(sumPars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//---Ex:2
// function numberList(num) {
//     for (let i = 0; i <= num; i++) {
//         console.log(i);
//     }
// }

// numberList(8)

//---Ex:3

// function numerList(num) {
//     for (let i = num; i >= 0; i--) {
//         console.log(i);

//     }
// }
// numerList(8)

//---Ex:4

// function numberList(num) {
//     for (let i = 0; i <= num * 0.5; i++) {
//         console.log(i * 2);

//     }
// }

// numberList(10)

//---Ex:5
// function multiplicationTable(j) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(j + "x" + i + "=" + j * i);
//         1
//     }
// }

// multiplicationTable(7)

//---Ex:6
// function multiple(num) {

//     let multiples_3 = [];
//     for (let i = 0; i <= num; i++) {
//         if (i % 3 === 0) {
//             multiples_3.push(i);
//             console.log(i);
//         }
//     }
// }

// multiple(15)

//---Ex:7

let letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

function DNI(num, letter) {
    if (num < 0 || num > 9999999) {
        return 'number invalid'
    } else if (num > 0) {

    }

}

let numberDNI = prompt("introducir numero")
let letterDNI = prompt("introducir letra")

DNI(numberDNI, letterDNI)


