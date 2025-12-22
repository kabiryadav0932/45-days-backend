/*
JavaScript try / catch Error Handling

What is try / catch?
try / catch is used to handle errors safely so your program doesn’t crash.
Instead of breaking the app, you catch the error and handle it.
*/


// basic syntax

try {
    // code that may cause an error
} catch(error) {
    // run if an error occurs
}

// example

// try {
//     let x = y + 1;
// } catch(error) {
//     console.log("Error happened :",error.message)
// }


// promise rejection example

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if(num % 2 === 0){
            resolve("Even Number");
        } else {
            reject("Odd Number");
        }
    });
}

async function run() {
    try {
        const result = await checkNumber(4);
        console.log(result);
    } catch (error) {
        console.log("Error :", error);
    }
}

run();

// here, without try/catch Program crashes with an unhandled promise rejection.




// question
/*
Practice Question (try / catch + async/await)
Task:
Create a function called divideNumbers
It takes two parameters: a and b
It returns a Promise
Inside the Promise:
If b === 0, reject with the message:
"Cannot divide by zero"
Otherwise, resolve with the result of a / b

Then:
Create an async function called run

Inside run:
Use try / catch
Call divideNumbers(10, 0)

Print the result if successful

Print the error if it fails
Print the error if it fails
*/

function divideNumbers(a,b){
    return new Promise((resolve, reject) =>{
        if(b===0){
            reject("Cannot divide by zero")
        } else {
            resolve(a/b)
        }
    });
}

async function run(){
    try {
        const result = await divideNumbers(10,2);
        console.log(result);
    } catch(error){
        console.log("Error :", error);
    }
    
};
