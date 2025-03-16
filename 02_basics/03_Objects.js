// nested object also we can declare

let obj = {
    email:'abc@gmail.com',
    fullname:{
        firstname:'abc',
        lastname:'yxz',
        address:{
            city:'pqr'
        }
    }
}
console.log(obj?.fullname?.address)

let obj1 = {1:'a',2:'b'}
let obj2={3:'f',4:'g'}

// merging two object in one

const obj3 = {...obj1,...obj2} //using spread operator
const obj4 = Object.assign({},obj1,obj2)

console.log(obj3,obj4)

//objects methods

console.log(Object.keys(obj)) // [ 'email', 'fullname' ]
console.log(Object.values(obj)) // ['abc@gmail.com',{ firstname: 'abc', lastname: 'yxz', address: { city: 'pqr' } }]
console.log(Object.entries(obj)) // return array in key value form 

/*
[
  [ 'email', 'abc@gmail.com' ],
  [
    'fullname',
    { firstname: 'abc', lastname: 'yxz', address: [Object] }
  ]
] 
*/