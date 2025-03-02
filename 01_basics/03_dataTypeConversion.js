let score = '33abc'
console.log(typeof score)

let stringToNumber = Number(score)
console.log(typeof stringToNumber,stringToNumber)

/*
type of score => number
"33" => 33
"33abc" => NaN -> not a number
true -> 1
false -> 0
 */
let stringValue = 123
let stringValue1= true
let numberToString = String(stringValue1)
console.table([typeof numberToString,numberToString]) // string -> '123',string -> 'true'

let booleanValue = 123
let booleanConvert = Boolean(booleanValue)
console.table([typeof booleanConvert,booleanConvert]) // 'abcd'--> boolean --> true, "" --> boolean--> false,123--> boolean --> true

console.log("1" + 2 + 2) // if string is first so all conversion in string ---> 122
console.log(1 + 2 + '2') // if string is last so it operation done first and then concate string --> 32

const id = Symbol('123') // symbol data type is give unique id
const anotherId = Symbol('123')

console.log(id===anotherId) // false