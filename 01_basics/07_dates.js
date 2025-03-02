const date =  new Date()
console.log(date) //2025-03-02T05:47:32.264Z
console.log(date.toDateString()) //Sun Mar 02 2025
console.log(date.toLocaleDateString()) // 2/3/2025
console.log(date.toString()) // Sun Mar 02 2025 11:17:32 GMT+0530 (India Standard Time)
console.log(typeof date) //object
console.log(date.toISOString()) //2025-03-02T05:47:32.264Z
console.log(date.toLocaleString()) // 2/3/2025, 11:28:30 am