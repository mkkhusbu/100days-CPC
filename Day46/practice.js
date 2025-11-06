//!1Write a function that takes a string and returns it reversed.
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));//olleh

//?2.Given an array of numbers, find the largest one.
function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([10, 5, 8, 22, 1]));//22
// ?A palindrome is a word that reads the same backward and forward
function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
