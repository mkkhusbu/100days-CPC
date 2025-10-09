// !Anonymous Function
// const greet = function() {
//   return "Hi there!";
// };
console.log(greet()); 
// !Named function
function greet() {
  return "Hello!";
}
console.log(greet()); // Hello!

// !Function expression
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5
//! Arrow Fun
const square = n => n * n;
console.log(square(4)); // 16

//Immediate invoked Function
(function () {
    console.log("This runs immediately!");
})();

// Callback Function
function num(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));

// Nested Function
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5));

// Pure Function
function pureAdd(a, b) {
    return a + b;
}

console.log(pureAdd(2, 3));
// default Function
function greet(name = "Guest") {
  return "Hello, " + name;
}
console.log(greet());      // Hello, Guest
console.log(greet("Aman"));// Hello, Aman
// Rest parameter Function
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10