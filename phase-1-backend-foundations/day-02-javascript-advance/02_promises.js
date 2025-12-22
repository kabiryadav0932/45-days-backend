/* What is a Promise?

A Promise represents a value that will be available in the future.

It can be in one of three states:

| State         | Meaning              |
| ------------- | -------------------- |
| **Pending**   | Still working        |
| **Fulfilled** | Operation successful |
| **Rejected**  | Operation failed     |


Think of it like a food order 

Ordered → pending
Food delivered → fulfilled
Order canceled → rejected


Why Promises Exist?

Callbacks caused problems like:

Callback hell
Hard error handling
Unreadable code
 */



// promise syntax
// const promise = new Promise ( (reject,resolve) => {
//     // async work
// });



//e.g 1
// const promise = new Promise((resolve, reject) => {
//   resolve("Hello from Promise");
// });

// promise.then(message => {
//   console.log(message);
// });

//e.g 2

// function wait() {
//     return new Promise(resolve => {
//         setTimeout( () => {
//             resolve("Done waiting");
//         },2000)
//     });
// }

// wait().then(msg => console.log(msg));



// practice question
/*Task:
Create a function called getMessage
Inside it, return a Promise
Use setTimeout to wait 1 second
After 1 second, resolve the promise with the message:*/

// function getMessage () {
//     return new Promise(resolve =>{
//         setTimeout( () =>{
//             resolve("Hello from Promise")
//         },1000)
//     });
// }

// getMessage().then(msg => console.log(msg));








// A Promise is an object that says: “I will give you a value later.”