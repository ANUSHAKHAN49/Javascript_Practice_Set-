// ** Super keyword ** //
class Programmer {
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

let e = new Gamedeveloper()
 let f = new Programmer()
 f.requestleaves(2)
e.python()
 
e.cofee()
e.requestleaves(3)
