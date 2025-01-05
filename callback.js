// ** Callback FUnction ** //

function loadscript(src,callback){
    var script = document.createElement("script")
     script.src = src;
     script.onload = function(){
         console.log("script loaded with SRC:" + src)
         callback(src);}
         script.onerror = function (){
            console.log("Error script loaded with SRC:" + src) 
             callback(src)
         }   
     document.body.appendChild(script);
 }
 function hello(src){
     alert("hey i am running" + src)
 }
 function mistake (src){
     alert("you got some errors in src")
}
 loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello)
