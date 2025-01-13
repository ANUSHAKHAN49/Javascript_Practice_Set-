// ** Extend Keyword ** //
class Animal  {
   eat(){
    console.log("eating noww")
   }
   sleep(){
    console.log("this animal is sleeping right now")
   }

}

class Monkey extends Animal{
  jump (){
    console.log("monkeys are jumping from one to another tree")
  }
  eats(){
    console.log("the favourite food is banana")
  }
}
let cat = new Animal()
let monkey = new Monkey()

monkey.jump()
monkey.eats()
cat.sleep()
