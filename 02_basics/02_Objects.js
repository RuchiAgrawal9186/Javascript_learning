const symb = Symbol('key1')
let obj = {
    name:'abc',
    email:'email@gmail.com',
    number:2345612340,
    age:18,
    language:['js,python'],
    [symb]:'new kwy' // access symbol inside object
}

console.log(obj.name) // access with . method
console.log(obj['name']) // access with string method also

obj.name='xyz'
obj['email']='new@gmail.com'
console.log(obj)

// Object.freeze(obj) // we can not change obj value 

obj.greeting = function ()
{
    console.log('this is greeting function')
}

 obj.greeting1 = function ()
{
    console.log(`name is ${this.name}`) // access its own obj property using this 
}

console.log(obj.greeting())
console.log(obj.greeting1())