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