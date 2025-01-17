// ** IIFE Immediately Invoked Function Expresion ** //

let a = () =>{
  return new Promise ((resolve,reject) => {
  setTimeout(() => {
    resolve(450)
  }, 4000);
  })
}
  ( async () =>{
 let b = await a()
 console.log(b)
 let c = await a()
 console.log(c)
 let d = await a()
 console.log(d)

  })() 
