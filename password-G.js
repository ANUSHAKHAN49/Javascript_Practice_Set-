// Password Genarator 

class PasswordGenerator {
  constructor(){
    console.log("Welcome to Password Genarator")

  }
 generatePassword(len){
  let charac = "abcdefghijklmnopqrstuvwxyz"
  let numbers = "1234567890"
  let special = "*&^%$#@!()"
 if(len<3){
   console.log("passoword have atleast more than long 3 characters")
 }
 else{
  let i  = 0 
  while (i<len) {
    this.pass += charac[Math.floor(Math.random()* charac.length)]
    this.pass += numbers[Math.floor(Math.random()* numbers.length)]
    this.pass += special[Math.floor(Math.random()* special.length)]
    i += 3
  }
  this.pass = this.pass.substr(0,len)
  return this.pass
 }

 }
}
let p = new PasswordGenerator()
console.log(p.generatePassword(7))
 
