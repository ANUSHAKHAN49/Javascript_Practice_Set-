// ** Static Method ** //

class Animal {
  constructor(name){
    this.name = (Animal.capatalize(name))
  }
  walk (){
    console.log("Animal " + this.name + " is walking")
  }
  static capatalize(name){
    return name.charAt(0).toUpperCase() + name.substr(1,name.lenght)
  }
}

let o = new Animal("jack")
o.walk()
