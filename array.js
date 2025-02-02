// Quiz
    let str1 = "anusha";

      let str2 = "ramsha";

      let mergedStr = "";
    
     for(let i = 0 ; i< str1.length ; i++){
        if(str2[i] === undefined){
           mergedStr += str1[i]
        }
        else{
            mergedStr += str1[i] + str2[i]
        }
     }

     console.log(mergedStr)

// Quiz about arrange that numbers in an ascending order
     let numbers = [5, 2, 9, 1, 7, 3];
     numbers.sort((a, b) => a - b);
  console.log(numbers); // Output: [1, 2, 3, 5, 7, 9]

// Quiz about arrange that numbers in an descending order
     let numbers = [5, 2, 9, 1, 7, 3];
     numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [9, 7, 5, 2, 1]     
   
   //   for loop for array
   let num = [1,4,6,8,9,10]
   for(let i = 0; i < num.length;i++){
      console.log(num[i])
   }
// For each loop
   num.forEach(element => {
      console.log(element*10)
   });
// Array.form
   let name ="anusha"
   let arr = Array.from(name)
   console.log(arr)
     
  // for of 
  for (let i of num) {
   console.log(i)
  } 
