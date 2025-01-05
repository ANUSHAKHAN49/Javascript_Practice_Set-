// ** promises and then and catch ** //
let p = new Promise ((resolve , reject)=>{
  setTimeout(()=>{
    console.log("this is the promise it's value is")
    resolve(56)
  },2000)
})
p.then((value)=>{
  console.log(value)
  let p2 = new Promise (( resolve, reject)=>{
    setTimeout(()=>{resolve ("promise 2")},3000)
  
  })
  return p2
}).then((value)=>{
  console.log("we are done")
 })
const loadscript = (src)=>{
    return new Promise ((resolve,reject)=>{
    let script = document.createElement("script")
    script.type ="text/javascript"
    script.src = src
    document.body.appendChild(script)
    script.onload=()=>{
   resolve("script has been loaded .....sir ok ha")
    }
    script.onerror = ()=>{
        reject(0)
    }
})
}
 
let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
p1.then((value)=>{
  console.log(value)
}).catch((error)=>{
  console.log("we have issue to load because in link some problems occur")
})
