// ** Hoisting in js ** //

/*const and let give error in that following condition*/ 
 let
 console.log(a)
 let a

 // const 
 console.log(b)
 const b ;

/* but in the condition of var we can't see error */
console.log(c)
var c = 2;

/* In hoisting of js function and arrow function is not considered */
greet()
let greet = function (){
  console.log("Good Morning")
}

drink()
let drink = ()=>{
console.log("you wanna drunk soft drink")
}
