let x = 123;
let txt = x.toString();
console.log(txt);

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(10));
console.log(Number.isNaN("hello"));
console.log(isNaN('Hello'));

function toCelcious(f){
    return (5/9) * (f-32);
}
console.log(toCelcious(77));

//! => An Object is a variable that can hold many variables

const person = {
    firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

console.log(person.age);
console.log(person['firstName']);

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
let text = Person('arif','ajmal',20,'black');
console.log(text);
