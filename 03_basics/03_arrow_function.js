let user = {
    userName:"abc1",
    city:'dahod',

    getUserDetails: function ()
    {
     console.log(`welcome ${this.userName} to ${this.city} city!`) // this is refering current context
     console.log(this,"this inside normal function") 
     /*{
        userName: 'abc1',
        city: 'dahod',
        getUserDetails: [Function: getUserDetails]
      }*/ 
    },

    newUserDetails : () => {
    console.log(this,"inside arrow function")   // {} its not refer current object its refer out of scope global
    }
};

user.getUserDetails(); 
console.log(this,'global this'); // {}
user.userName='new user'
user.getUserDetails(); //welcome new user to dahod city!
user.newUserDetails();

// in browser global object is window object

// arrow function syntax

// const fun = () =>{}
//  const fun = () => ()

// Immediatly invoked function (IIFE)

(function addTwo(){
    console.log("hello") // hello
})();

// Prevent Global Variable Pollution
(function() {
    var count = 0; // This variable is private
    console.log(count); // 0
  })();
  
  console.log(count); // ❌ Error: count is not defined // we can not access globally so it provide privacy

//   IIFE can be used to create private variables and methods, forming a module.
  