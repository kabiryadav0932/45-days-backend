
// setTimeout (function () {
//     console.log("timer")
// },5000);

// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// });


// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Alex", sayBye);



// function calculate(a, b, callback) {
//     const result = a + b;
//     callback(result);
// }

// function printResult(value) {
//     console.log("Result is:", value);
// }

// calculate(5, 3, printResult);




// callback-hell in not good, try to simple it.

// function step1() {
//   console.log("Step 1");
//   setTimeout(step2, 1000);
// }

// function step2() {
//   console.log("Step 2");
//   setTimeout(step3, 1000);
// }

// function step3() {
//   console.log("Step 3");
// }

// step1();
