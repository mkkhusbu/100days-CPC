// !⭐ Destructuring in Array


//!Generally 
var numbers = [10, 20, 30];
var a = numbers[0];
var b = numbers[1];
var c = numbers[2];
console.log(a);
//after Destructuring
var [a,b,d] = numbers;
console.log(d);

//others
const colors = ["red", "green", "blue"];
let [first,secont,last] = colors;
console.log(last);

//!If need skip elements
var numbers = [1, 2, 3, 4];
var [a, , f,d] = numbers;
console.log(d)
console.log(f);

// !Default Value
var [m = 100,n=200] = [10];
console.log(m);//10
console.log(n);//200

// !Rest Operator (…)
var fruits = ["apple", "banana", "mango", "orange"];
var [fst,...otherAl] = fruits;
console.log(fst);
console.log(otherAl)//['banana', 'mango', 'orange']

//!Swap Values Easily
var M = 7, N = 13;
[M,N] = [N,M]
console.log(N, M);//7,13

// !Nested Array Destructing
 numbers = [1, [2, 3], 4];
var [a,[b,c],d] = numbers;
console.log(c , b , a);//3 2 1

// !Function থেকে Array Return করলে Destructuring
function getCornidate(){
    return [23,34,45,43];
}

var [a,b,c,d] = getCornidate();

console.log(a,b,c,d);

// !Using with Split()

let fullName = "Arif Ajmal Khusbu";
const [fName,midName,LName] = fullName.split(' ');
console.log(midName);//Ajmal
console.log(LName)//Khusbu
console.log(fName , midName, LName)//Arif Ajmal Khusbu



//! Functions that return multiple values

function test (mk,km){
    return[
        mk + km,
        mk - km,
        (mk + km)/2
    ]
}
let [sum,difference,avg] = test(10,5);
console.log(sum,difference,avg);


