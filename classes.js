class Railywayform {
  submit(){
  alert( this.name + "" + "submit form" + "" + "with this train no" + this.train)}
  cancel(){
    alert(this.name + "form cancelled" + "" + "with this train no" + this.train)
  }
  fill(givename,trainno){
    this.name = givename
    this.train = trainno
  }
}
let harry = new Railywayform()
harry.fill("harry" , "12890")

let rohaan = new Railywayform()
rohaan.fill("rohan" , "12890")

harry.submit()
rohaan.submit()
rohaan.cancel()
