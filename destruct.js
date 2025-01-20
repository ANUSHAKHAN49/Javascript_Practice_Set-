// ** Destucturing in Js ** //
let arr = [6,7,8,4,5]
let [a ,b,c,d,] = arr
console.log(a ,b,c,d)

let array = [2,1,9,5,8]
let [e,,, ...rest] =array
console.log(e, ...rest)

let {a,b}= {a:1,b:9}
console.log(a,b)

let arr1 = [2,5,8]
let obj2 = {...arr1}
console.log(obj2)

function sum (v1 ,v2 ,v3){
  return v1 + v2 + v3
}
console.log(sum (...arr1))
