/*
Hoisting in JavaScript is the behavior where declarations (variables, functions, classes) are conceptually processed before code runs, so you can often reference them earlier in the code than they appear textually.
*/

/*

console.log(a); // undefined
var a = 10;

- here a is created in memory(using line 2), but it is not declated, so it is undefined





in case of a function

sayHi(); // "Hi"
function sayHi() {
  console.log("Hi");
}
- it will return the answer




sayHello(); // TypeError
var sayHello = function () {
  console.log("Hello");
};
- here the sayHello() is treated as var, therefore it is throwing error, same case for arrow function also.



*/
