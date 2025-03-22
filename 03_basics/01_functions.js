// function is set of code we can use frequently where we want to use

// basic

function print()
{
    console.log("hello world")
}
console.log(print())

function addTwoNumbers (num1,num2) // this function defination, and parameters
{
    return num1+num2   //after return nothing will excute
    console.log("new")
}
let result = addTwoNumbers(3,6) // function call , and arguments
console.log(result)

function defaultParams (name='abc')
{
  return `${name} is printend`
}
console.log(defaultParams())
console.log(defaultParams('xyz'))

//rest operator

function learnRestOperator (num1,num2,...val) // val is in rest operator give all remaining values
{
  return val
}
console.log(learnRestOperator(500,600,23,490,300,200)) // [ 23, 490, 300, 200 ] return in array rest of values

// pass object and array in functions

function passArray (newArray)
{
    return newArray[3]
}
console.log(passArray([30,50,60,12,92,52]))

function passObject (newObj)
{
    return `${newObj.name}`
}
console.log(passObject({name:'abc',city:'dahod'}))