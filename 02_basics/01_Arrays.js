// array

const myArr = [1,2,3,4,5]
myArr.push(6) // add element in last index
myArr.pop() // removed element from last index

myArr.unshift(9) // add element in first index
myArr.shift() // remove element from first index

myArr.includes(5) // check that perticuler value is present or not gives tru false result
myArr.indexOf(4) // find index of provided element if element is not present gives -1


const newArr = [1,2,3,4,5,6]
console.log(newArr.slice(1,3)) // [2,3] start from 1 index and end to 2 index 3 is not include range
console.log(newArr) //[1,2,3,4,5,6] its not manipulation original array

console.log(newArr.splice(1,3)) // [2,3,4] include both range
console.log(newArr) // [1,5,6] // manipulate original array remaining element will give after splice

// shallow copy and deep copy

// 1) shallow copy -> copy of orginal object stored only one orinal refrence PaymentAddress
// 2) deep copy -> copy of orinal object stored multiple copies of refrence

const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8]
// arr1.push(arr2)
// console.log(arr1) //[ 1, 2, 3, 4, 5, [ 6, 7, 8 ] ]


const arr3 = arr1.concat(arr2)
// console.log(arr3) // [ 1, 2, 3, 4,5, 6, 7, 8]
// you can concat or using spred operator 

const arr4 = [...arr1,...arr2]
// console.log(arr4) // [ 1, 2, 3, 4,5, 6, 7, 8]

const arr5 = [1,2,3,[4,5,6,[7,8],9],10]
console.log(arr5.flat()) //[ 1, 2, 3, 4, 5, 6, [ 7, 8 ], 9, 10 ]
console.log(arr5.flat(Infinity)) // flat parameter means how depth you want to flat your array in what level, by default is 1

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ] convert variable to in array
console.log(Array.from("string")) //[ 's', 't', 'r', 'i', 'n', 'g' ] also convert in array by spred all element

