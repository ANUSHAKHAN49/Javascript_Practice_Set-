// ** cookies in javascript ** // 

let value = prompt("enter your value")
let key = prompt("enter your key")
document.cookie =`${encodeURIComponent (value)}=${encodeURIComponent(key)}`
console.log(document.cookie)
