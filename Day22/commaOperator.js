// !JavaScript Comma Operator

let m = (1,2,3);
console.log(m);//3

let a = 1, b = 2, c = 3;
let res = (a++,b++,c++);
console.log(res);//3
console.log(a,b,c);//2 3 4


function Func1() {
    console.log('one');
    return 'one';
}
function Func2() {
    console.log('two');
    return 'two';
}
function Func3() {
    console.log('three');
    return 'three';
}

// Three expressions are
// given at one place
let x = (Func1(), Func2(), Func3());

console.log(x);

// !Unary Plus (+) Operator
let mk = '12';
console.log(typeof (mk));
let km = +mk;
console.log(km);
console.log(typeof (km));
let s2 = +"Geeks";
console.log(s2);
console.log(typeof s2);

// *Unary Minus (-) Operator
let s1 = "12";
 let x1 = -s1;
console.log(x1)
console.log(-s2);


 x = 12;
let y = x++;
console.log(x);//13
console.log(y);//12
console.log(y);//12


// Case 2: Preifix
x = 10;
y = ++x;
console.log(x);//11
console.log(y);//11


// *Unary Decrement (--) Operator
 x = 12;
 y = x--;
console.log(x);//11
console.log(y);//12

// Case 2: Preifix
x = 10;
y = --x;
console.log(x);//9
console.log(y);//9

// ?Logical NOT (!) Operator
 x = false;
 y = !x;
console.log(y);//true
console.log(!y);//false
console.log();

// !typeof Operator
 x = 18;
let s = "GeeksforGeeks";
let isTrue = true;
let obj = { name: "Aman", age: 21 };
let undefinedVar;

console.log(typeof x);
console.log(typeof s);
console.log(typeof isTrue);
console.log(typeof obj);
console.log(typeof undefinedVar);

// !delete Operator
let person = {
    name: "Ankit",
    age: 21,
    city: "Noida"
};
console.log(person);
delete person.age
console.log(person);

let languages = ["HTML", "CSS", "JavaScript"];

// true (index 1 exists in the array)
console.log(0 in languages);//true
console.log(1 in languages);//true
console.log(2 in languages);//true
console.log(3 in languages);//false

const Data = {
    name: "Rahul",
    age: 21,
    city: "Noida"
};
console.log('');

console.log('name' in Data);//true
console.log('city' in Data);//true
console.log('address' in Data);//false

console.log('');

//! JavaScript instanceof Operator
    languages = ["HTML", "CSS", "JavaScript"];
    console.log( languages instanceof Array);
    console.log( languages instanceof Object);
    console.log(languages instanceof String);
    console.log(languages instanceof Number);
    
    console.log("");

    let myString = new String();
    let myDate = new Date();

    console.log(myDate instanceof Object);//true
    console.log(myDate instanceof String);//false
    console.log(myDate instanceof Date);//true

    console.log(myString instanceof Object);//true
    console.log(myString instanceof String);//true
    console.log(myString instanceof Date);//false

//   !JavaScript Optional Chaining

const user = {
    dog: {
        name: "Alex"
    }
};
console.log(user.dog?.name);
console.log(obj.contact?.phone);