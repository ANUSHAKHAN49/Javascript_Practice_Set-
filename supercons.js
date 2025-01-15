// ** method overridding constructor ** //
class Programmer {
  constructor(name){
    console.log(`${name} - Employees constructor is here `)
    this.name = name
  }
  python(){
    console.log("a python developer ....the data science analysis ")

  }
  javascript(){
    console.log("a javascript developer .... a great frontend page developer")
  }
  requestleaves(leaves){
    console.log(`leaves issued of ${leaves}` )
  }
}

class Gamedeveloper extends Programmer {
    cofee(){
      console.log("Give a coffee to hard worker") 
    }
    requestleaves(){
      super.requestleaves(3)
      console.log("One extra for game developers")
    }
}

let e = new Gamedeveloper("anusha")
let f = new Programmer()
f.requestleaves(2)
e.python()
e.cofee()
e.requestleaves(3)
