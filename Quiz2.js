// Intrest calculating calculator

function simpleIntrest (p,q,r){
  return (p*q*r)/ 100
}
console.log(simpleIntrest(5,10,100))

// A function which takes n seconds in alternate to settiout sec so we'll write multiple timeout thorugh this method

const b = async  (text ,n )=>{
  return new Promise ((resolve,reject)=>{
   setTimeout(() => {
    resolve(text)
   }, 1000 * n);
  })

}
(
  async ()=>{
 let text = await b("I am in 4 sec" , 4)
 console.log(text)
 text = await b("I am in 6 sec " , 6)
 console.log(text)

}) ()
