// 1) stack(used in primitive dataTypes) -> its copy value of that store d in memory

let firstName1 = 'user'
let firstName2 = firstName1
firstName2='user2'

console.table([firstName1,firstName2]) // here firstName1 will 'user' , and firstName2 will 'user2'
 // original value can not change, it is un mutable


// 2) Heap (used in non-primitive dataTypes) -> its taking refrence of that storing value (actual value)

let firstObj = {
    name:'user1',
    email:'user1@gmail.com'
}
let secondObj = firstObj
secondObj.name='user2'
secondObj.email='user2@gmail.com'

console.table([firstObj,secondObj]) // here firstObj value is also changed because its pointing same refrences , it is mutable 