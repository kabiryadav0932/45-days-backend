/*What is a Closure?

A closure is created when:
A function remembers and can access variables from its outer scope, even after the outer function has finished executing. */

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); 
counter(); 
counter(); 


// Closure = function + its outer scope variables.




/*Hoisting (Another Core Concept)
What is Hoisting?

Hoisting means:
JavaScript moves declarations to the top of the scope before execution.
⚠️ Only declarations are hoisted, not values.*/

sayHello();

function sayHello() {
  console.log("Hello");
}
