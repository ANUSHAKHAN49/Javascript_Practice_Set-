// ** Constructor in js ** //
class Railywayform {
  constructor(givename,trainno,address){
    console.log("Constructor called....."+ givename + "" + trainno + address)
    this.name = givename
    this.train = trainno
    this.address = address
  }
  preview(){
alert(this.name+ "train no" + this.train + "with that address----" + this.address)
  }
  submit(){
  alert( this.name + "" + "--submit form" + "" + "with this train no" + this.train)}
  cancel(){
    alert(this.name  +  "form cancelled" + "this train no" + this.train)
  }
  
}
let anusha = new Railywayform("anusha" , "12890" ,"abc street 420  ,xyz city")

let ramsha = new Railywayform("ramsha" , "24800" , "ocean , pacific ocean ,4390-street")

anusha.submit()
anusha.preview()
anusha.cancel()
ramsha.submit()
ramsha.cancel()
ramsha.preview()

