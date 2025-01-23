// solve a question which is print hello world after 2s used IIFE function

const a = async  (text)=>{
  return new Promise ((resolve,reject)=>{
   setTimeout(() => {
    resolve(text)
   }, 2000);
  })

}
(
  async ()=>{
 let text = await a("Hello")
 console.log(text)
 text = await a("World")
 console.log(text)

}) ()

// solve this which is used through destructuring in js 

function sum(a,b,c){
  return a  + b + c
}
let x = [3,8,4]
console.log(sum(...x))
