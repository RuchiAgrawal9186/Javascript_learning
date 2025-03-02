const score = 400 // 400
const number = new Number(400) // its specifically defined that is number data type
// console.log(number) // [Number:400]
const newNumber = 5678.4532
// console.log(newNumber.toFixed(2)) // its indicate two digit after decimal -> 5678.45
// console.log(newNumber.toPrecision(4)) // -> 5678 // its priority before decimal degit first and after decimal it will do round of that number

const anotherNumber = 10000000
// console.log(anotherNumber.toLocaleString()) // by default its convert in US formate representation of number -> 1,00,00,000
// console.log(anotherNumber.toLocaleString('en-IN'))// its convert in indian number representation ->1,00,00,000

// ******************** Math ***************************//
 
console.table([Math.abs(-4),Math.abs(5),Math.round(4.4),Math.round(4.6),Math.round(4.5),Math.ceil(4.1),Math.floor(4.9),Math.min(2,5,6),Math.max(6,9,1)])
/*┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 4      │ //abs covert negative to positive
│ 1       │ 5      │// positive stay as it
│ 2       │ 4      │// round it doing round of that digit 4.4 -> 4
│ 3       │ 5      │//4.6 -> 5
│ 4       │ 5      │// 4.5 -> 5
│ 5       │ 5      │// ceil is round to top value 4.1 -> 5
│ 6       │ 4      │// floor is round to lowest value 4.9 -> 4
│ 7       │ 2      │// min is find min value from given number
│ 8       │ 9      │// max is find max value from given number 
└─────────┴────────┘*/

console.log(Math.random()) // its giving random value from 0 to 1 in decimals
console.log(Math.random() * 10) // its giving random value from 1 to 10
console.log( (Math.random() * 10) + 1) // +1 added because of to avoid 0

const min =10
const max =20

console.log(Math.floor(Math.random() * (max-min + 1) + min))// round of lowest and avoid decimal