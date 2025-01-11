// a simple notepad saver using loadstorage syntax features //
let n = localStorage.getItem("note")
alert("your note is " + n)

let p = prompt("Enter your note")
if(p){
  localStorage.setItem("note",p)
}

let c = confirm("do you want to delete your note")
if (c){
  localStorage.removeItem("note")
  alert ("your note deleted sucessfully")
}
