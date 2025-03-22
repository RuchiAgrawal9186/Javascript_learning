let a=100 
if(true)   // {} between this is local level scope 
{
    let a=10
    // console.log(a) // 10
}
// console.log(a) //global level scop - 100


// nested function ,local scope , global scop and hoisting

console.log(one(5)) // we can call normal function before intialization -- 15
function one(num1)
{
    function two(num2)
    {
        console.log(num1+num2) // here we can access num1 because its global -- 10
        return num1+num2 // so it will tack num1 from one() function add num2 from two() and sum it and return  --10
    }
    // console.log(num2) // it will give error because it is out of scope
    two(5)   // second execute this line because it will execute line by line so call second two function -- 10
    return num1 + two(5) // third step it will return num1 value + result of two() function return  -- 5+10 -- 15
}

// console.log(one(5))  // first execute one function -- 15

console.log(newFun(10)) // Cannot access 'newFun' before initialization its throw error because we are storing function in varaible 
                        // its not initialized and we are try to access before initialization
const newFun = function (num1)
{
    function two(num2)
    {
        // console.log(num1+num2) // here we can access num1 because its global -- 10
        return num1+num2 // so it will tack num1 from one() function add num2 from two() and sum it and return  --10
    }
    // console.log(num2) // it will give error because it is out of scope
    two(5)   // second execute this line because it will execute line by line so call second two function -- 10
    return num1 + two(5) // third step it will return num1 value + result of two() function return  -- 5+10 -- 15
}
// console.log(newFun(10)) // here we can run function -- 25