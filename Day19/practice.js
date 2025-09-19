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

// let letters = ["A","B","C","D","E"];
// let test= '';

// // for(let x of letters.entries()){
// //     test+= x + " ";
// // }
// //console.log(test);
// console.log(Object.entries(letters));

/*
//????????=============== .every ===
==> array.every(function(currentValue, index, arr), thisValue)
const ages = [32, 33, 16, 40];
//let myTry = ages.every(x=> x > 10);<==>//console.log( myTry);

function myF(age){
    return age > 18;
}
let myT = ages.every(myF);
console.log(myT);
*/
//console.log(t);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let tt = fruits.toSpliced(1,1,"MIM")
// // console.log(fruits.slice(4));
// // console.log(fruits.slice(0,2));
// // console.log(fruits);
// console.log(fruits.fill("MIM",1,3));

/*********    
             <========>
  
    const words = ["hello", "world"];
    let result = words.flatMap(word => word.split(' '));
    //console.log(result);
    const arr = [1, 2, 3];
    let rr= arr.flatMap(x=> [x,x*2]);
    //console.log(rr);
            <========>
    const numbers = [1, 2, 3, null, 4,0,undefined];
            let result = numbers.flatMap(num =>num ? [num] : []);
            console.log(result);

            <========>
        const nested = [[1], [2, 3], [[4]]];
          let result = nested.flatMap(x => x)  
          console.log(result);
 const arr = [1, 2, 3];   
 let result = arr.map(x=>x,x*2).flat()
 console.log(result);
 
            <========>
            <========>
          
            <========>
            <========>
********/

// let text = "ABCDEFG"
// const myArr = Array.from(text);
// console.log(myArr instanceof Array);
// console.log(myArr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let i = fruits.includes("Banana", 0);
// console.log(i)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = Array.isArray(fruits)
// console.log(result);
// console.log(typeof fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join("");
// console.log(text);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.keys();
// let txt = '';
// for(let i of text ){
//     txt+= i;

// }
// console.log(txt);

// const numbers = [65, 44, 12,3, 4];
// numbers.forEach(myFunction);
// function myFunction(item,index,arr){
//     console.log('Item:'+ item + ' ' + "Index:" + index + ' ' + "arr="+' '+arr);

// }

// let test = numbers.forEach((item,index,arr)=>{
//     console.log('Item:'+ item + ' ' + "Index:" + index + ' ' + "arr="+' '+arr);
// })

//console.log(numbers.includes(12,0))

//=====
/* const persons = [
            {firstname : "Malcom", lastname: "Reynolds"},
            {firstname : "Kaylee", lastname: "Frye"},
            {firstname : "Jayne", lastname: "Cobb"}
          ];
          
          console.log(persons.map(getFullName));
          
          function getFullName(item) {
            return [item.firstname,item.lastname].join(' ');
          } */

// console.log(['e',"r","a", "b" ].findIndex((x)=> x==='a')); // 1

// <========>
/* console.log(Array.from("hello")); // ["h", "e", "l", "l", "o"]
        console.log(Array.from("hello").join('')); // hello
 */

// ?<========>  ProType Custome Method=====
/* Array.prototype.myCustomeMathod = function(){
                return this.map(x => x**2)
            }
            let num = [2,3,4];
            console.log(num.myCustomeMathod());

            let myCon = (x)=>{
                console.log(x);
                
            }
            myCon(num) 
        */

//?=====Reduce Method
const numbers = [15.5, 2.3, 1.1, 4.7];

function res(total, sum) {
  return total + sum;
}
//console.log(numbers.reduce(res,0));
let total = numbers.reduce(
  (accumulator, currvalue) => accumulator + currvalue,
  0
);
// console.log(total);

/* const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount); */

// const fruitCount = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// }, {});

// console.log(fruitCount);

// ?? .With Method

// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");
// console.log(myMonths);
// let MM = months.splice(4,"May");
// console.log(MM)

/*==================
 //? Math.floor()
console.log(Math.floor(3.4))//3
console.log(Math.floor(3.5));//3
 
//? Math.ceil()
console.log(Math.ceil(4.5));//5
console.log(Math.ceil(4.4))//5

//? Math.Round()
console.log(Math.round(4.4))//4
console.log(Math.round(4.5));//5

//? Math.trunc()
console.log(Math.trunc(4.5));///4
console.log(Math.trunc(4.4))//4 
console.log(Math.trunc(-3.4));
console.log(Math.trunc(-3.5));
================
*/
//? Ternary Operator
/* let age = 18;
let check = age > 18 ? "Adult" : "Young"; //console.log(check);
age = 20;
let check1 = age >18 ? "Adult" : "Young";  //console.log(check1);

let speed = 120;
    speed= 80;
    speed=50;
let msg = speed >= 120 ? "Speed is Too Hogh" : speed >= 80 ? "Speed is Medium" : "Speed is Low";
console.log(msg); 
*/
//? Switch Case
/* let day = 5;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName); 

 */

//? Label statement==

/* let sum = 0,
  a = 1;

// Label for outer loop
outerloop: while (true) {
  a = 1;
  // Label for inner loop
  innerloop: while (a < 3) {
    sum += a;
    if (sum > 12) {
      // Break outer loop from inner loop
      break outerloop;
    }
    console.log("sum = " + sum);
    a++;
  }
} */

//? First class function==
/*
 function sum (a,b){
  return a + b;
}
let storeF = sum;
function reuseF(a,b,Predefine){
  return Predefine(a,b) * 10;
}

console.log(reuseF(5,3,storeF))
 */

//? pass-by-value- of primitive value
/* function A(a){
  return a*a;
}
let b=10;
let result = A(b);
console.log(result);
console.log(b);
 */

//? pass-by-value-Referce value
/* let person = {
  Fname:"Arif",
  age:20
}
function passV(obj){
 return obj.age+=1;
}
console.log(passV(person));
console.log(person);
 */
//? Array Spread(...)
/* const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

console.log(...q1,...q2,...q3,...q4);//Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov May
 */
//?    Array .With Method
/* const months = ["Januar", "Februar", "Mar", "April"];
console.log(months.with(2,"March"));
 */
//?JavaScript Regular Expressions
/* 
  =====Search =======
let fname = "arif ajmal khusbu";
let s = fname.search("ajmal");
    s= fname.search(/Ajmal/i);
console.log(s);

 */
/* 
  =====Replace====
let tst = 'I Love MK';
let tt = tst.replace("MK","mjm");
  tt = tst.replace(/mk/i,"aak");
console.log(tt);
 */

/* 
  ====Match=====
let fname = "Arif ajmal Khusbu";
let tt= fname.match(/ajmal/i);
console.log(tt); 
*/

/* let fname = "Arif ajmal Khusbu Arif ajmal Khusbu Arif ajmal Khusbu";
let tt = fname.match(/ajmal/g);//case sensitive
let tt2 = fname.match(/khusbu/gi);//g for global use,only g is case-sensitive,if u use gi,it will case-insensitive...
console.log(tt);
console.log(tt2);
 */
//?fOR  Multine-Line use 
/* let text = "\nIs th\nis it?";
let t = text.match(/^is/m);
console.log(t);
 */
//? For search Global caharacter
/* let fname = "Arif ajmal Khusbu Arif ajmal Khusbu";
tt = fname.match(/[ajmal]/g);
console.log(tt);//['a', 'j', 'm', 'a', 'l', 'a', 'j', 'm', 'a', 'l']
 */
//? For search Global Numbers
/* 
let text = "123456789";
let result = text.match(/[1-4]/g);
console.log(result);//['1', '2', '3', '4']
 */
//?Do a global search for any of the specified alternatives (red|green):
/* 
let text = "re, green, red, green, gren, gr, blue, yellow";
let tt = text.match(/(red|green)/g);
let tt2= text.match(/(red|yellow)/g);
console.log(tt);//['green', 'red', 'green']
console.log(tt2);//['red', 'yellow']
 */

// ? Error Handeling ----

/* function add(x, y) {
  if (typeof x !== 'number') {
    throw 'The first argument must be a number';
  }
  if (typeof y !== 'number') {
    throw 'The second argument must be a number';
  }

  return x + y;
}
try{
    //console.log(add(3,'a'))
    console.log(add('b,5))
}catch(e){
    console.log(e)
}
 */
import { sayHi } from "./gretting.js";
sayHi()

// var a=225;
// document.writeln(Math.sqrt(a));

////?==Question 1

/*            const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
            const fruitCount = fruits.reduce((acc, fruit) => {
              acc[fruit] = (acc[fruit] || 0) + 1;
              return acc;
            }, {});

            console.log(fruitCount);
            // আউটপুট: { apple: 3, banana: 2, orange: 1 }
 */

/*       const nestedArray = [
          [1, 2],
          [3, 4],
          [5, 6],
        ];
        const flattenedArray = nestedArray.reduce(
          (acc, currentValue) => acc.concat(currentValue),
          []
        );

        console.log(flattenedArray);
 */

/* 

const numbers = [3, 5, 7, 2, 8];
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log(max); // Output: 8


const str = 'hello';
const reversed = str.split('').reduce((acc, char) => char + acc, '');
console.log(reversed); // Output: 'olleh'


        
        */

let arrayLike = { 0: "a", 1: "b", length: 2 };
let realArray = Array.from(arrayLike);

//console.log(realArray);




//! ==================for practice JS problem Solving============
//?1.Create a variable called carName, assign the value Volvo to it.
 
//let carName = "Volvo"; console.log(carName);

//?2.On one single line, declare three variables with the following names and values.

 let firstName = "John";
let lastName = "Doe",
let age = 35;;
 
//?3.Use the correct assignment operator that will result in x being 50 (same as x = x * y).
 let x= 10;
let y =5;
x *=y;
console.log(x);
 
//?4.Use comments to describe the correct data type of the following variables.

let length = 16; // data type ? ==> Number
let lastName = "Johnson"; // data type ? ==> String

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // data type ? ==> Object
 
//?5.Execute the function named myFunction.

 function myFunction() {
  alert("Hello World!");
}
myFunction() 

//?6. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

const person = {
  name: "John",
  age : 50
};
alert(person.name + " is " + person.age); 

//?7.The <button> element should do something when someone clicks on it. Try to fix it!
<button onclick="alert('Hello MK')">Click me.</button>

//?8.Array Related Question 
// 1. Alert the number of items in an array, using the correct Array property: 
// const cars = ["Volvo", "Jeep", "Mercedes"];


 alert(cars.length);


// 2. Change the first item of Brand to "Ford".
// 	const Brand = ["Volvo", "Jeep", "Mercedes"]; 


const cars = ["Volvo", "Jeep", "Mercedes"];
cars[0] ="Ford"; 

//? 9.Math Related Problems
//1. Use the correct Math method to create a random number.

 Math.random()


//2. Use the correct Math method to return the largest number of 10 and 20.

    Math.max(10,20);


//3. Use the correct Math method to get the square root of 9.

  Math.sqrt(9)
 

  //?10.comparison operator related problems.
//  1. Choose the correct comparison operator to alert true, when x is greater than y. 
let x = 10,
    y = 5;

alert(x>y) 


// Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
 let TernaryOperator = age < 18 ? alert("Too Young") : alert("Old enough");