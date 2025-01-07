// ** prototypes ** //

let a ={
  name2: "anusha",
  language: "javascript",

}
console.log(a)

let p ={
  run:()=>{
    alert("run okk")
  }
}
p.__proto__={
  name:"ramsha"
}
a.__proto__= p
a.run()
console.log(a.name)
