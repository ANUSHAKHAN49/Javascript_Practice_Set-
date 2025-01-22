// ** clousure in js ** //

/* closure is bundle of function which return with it's lexical enviroment*/

message = "global afternoon"
function hello(){
  message = "Good morning"
  console.log("hey " + message)

  let greet = function hello2 (){
    console.log (" hey! everyone " + message)
  }
  return greet
}
 greet = hello ()
 greet()
