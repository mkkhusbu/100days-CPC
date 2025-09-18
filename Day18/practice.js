// const numbers = [10, 5,20, 8, 1, 7]
// function myFun (arr){
//     let len = arr.length;
//     let min = Infinity;
//     while(len--){
//         if(arr[len] < min){
//           min = arr[len];
//         }
        
//     }
//     return min;
// }
// console.log(myFun(numbers));

// const fruits = ["Banana", "Orange", "Apple", "Mango","Kiwi"];
// console.log(fruits);

//  fruits.copyWithin(2,0,3);
// console.log(fruits);

let letters = ["A","B","C","D","E"];
//letters.copyWithin(4,0,1);
let tst = "";
let lett = letters.entries();
// for(let x of lett){
//   tst+=x + " ";
  
// }
console.log(lett.next())
console.log(lett.next().value);

