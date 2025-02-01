//For Loop

let greet =""
for (let i = 0; i<10;i++){
    greet += "Hello " 
   
}
console.log(greet)

// For in 

let obj = {
    anusha: 97,
    ramsha: 90,
    maham: 35,
    ayan: 49,

}
 for(let a in obj){
    console.log("Marks of " + a + " are " +  obj[a])
 }
 for (let b of "hania "){
    console.log(b)
 }

 // while
let c = ""
 let i = 0 ;
 while ( i < 20) {
    c += " Nice "
   
    i++; 
 }
console.log(c)

//do while
let a = 1 ;
do {
   console.log(a+1)
   a++ 
} while (a<12);
