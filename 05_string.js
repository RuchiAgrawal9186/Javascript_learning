let name="user"
const userName = new String('user1') // two ways we can declare the string 

console.table([userName.toUpperCase(),userName.charAt(3),userName.indexOf('e')])
// toUppercase covert all char in uppercase, chartAt if give that chart which is available in defined index, and index of give 
// index of defined char

const newName = 'hello-world-com'
const newName1 = '  hello-world- com  '

console.table([newName.includes('world'),
               newName.includes('abc'),
               newName.split("-"), // its spilt string with - and giving array 
               newName.startsWith('hello'),
               newName.endsWith('c0m'),
            //    newName.join("*"),
               newName.replace('com','in'), // its replace com with in
               newName.slice(4,8),
               newName.substring(3,7),
               newName1.trim(),
               newName.charCodeAt(3), // giving utf-16 char value of that chart of defined index
               newName.repeat(2), // its repeat string 2 times
               newName.lastIndexOf('world'),
               newName.valueOf(),
               newName.padStart(25,'*'), // its added start of sting * and arrange length of 25 
               newName.padEnd(25,'&') // its added end of sting & and arrange length of 25
               ]
)

/* (index) │ 0       │ 1       │ 2     │ Values                           │
├─────────┼─────────┼─────────┼───────┼──────────────────────────────────┤
│ 0       │         │         │       │ true                             │
│ 1       │         │         │       │ false                            │
│ 2       │ 'hello' │ 'world' │ 'com' │                                  │
│ 3       │         │         │       │ true                             │
│ 4       │         │         │       │ false                            │
│ 5       │         │         │       │ 'hello-world-in'                 │
│ 6       │         │         │       │ 'o-wo'                           │
│ 7       │         │         │       │ 'lo-w'                           │
│ 8       │         │         │       │ 'hello-world- com'               │
│ 9       │         │         │       │ 108                              │
│ 10      │         │         │       │ 'hello-world-comhello-world-com' │
│ 11      │         │         │       │ 6                                │
│ 12      │         │         │       │ 'hello-world-com'                │
│ 13      │         │         │       │ '**********hello-world-com'      │
│ 14      │         │         │       │ 'hello-world-com&&&&&&&&&&'  */