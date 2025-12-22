/* Promise chaining means:
Running multiple asynchronous tasks one after another,
using multiple .then() calls.
Each step waits for the previous one to finish.*/

/*
Task:

Create a function called step
It takes two parameters:
message,time
It returns a Promise
Inside the promise:
Use setTimeout
After time milliseconds, resolve with message

Then:
Use promise chaining to print the following in order, with 1 second delay between each:

Step 1 completed
Step 2 completed
Step 3 completed

Expected Flow:

Step 1 → wait 1 sec → print
Step 2 → wait 1 sec → print
Step 3 → wait 1 sec → print */

function step(ms, message) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(message);
        }, ms)
    });
}

step(1000, "Step 1 completed")
    .then(msg => {
        console.log(msg);
        return step(1000, "Step 2 completed");
    })
    .then(msg => {
        console.log(msg)
        return step(1000, "Step 3 completed");
    })
    .then(msg => {
        console.log(msg);
    });