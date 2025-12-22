// What is async / await ?
// async / await is just a cleaner way to write Promise code.
// It makes asynchronous code look synchronous.
// 
// Important:
// It is built on Promises
// It does not replace Promises


function wait() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Done waiting");
    }, 2000);
  });
}
// this is the promise version

// now use async logic
async function run() {
    const msg = await wait();
    console.log(msg);
}

run();


//practie question
/*Task:

Create a function called delayMessage
It takes two parameters:
message
time
It returns a Promise
Inside the Promise:
Use setTimeout
After time milliseconds, resolve with message
Then:
Create an async function called run
Inside run:
Use await to call delayMessage
Print three messages in order, each after 1 second delay:

First message
Second message
Third message

Expected Output (1 second apart)
First message
Second message
Third message*/


function delayMessage(time,message){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(message);
        },time);
    });
}

async function run() {
    const s1 = await delayMessage(1000,"First Message");
    console.log(s1);

    const s2 = await delayMessage(1000,"Second Message");
    console.log(s2);

    const s3 = await delayMessage(1000,"Third Message");
    console.log(s3);
}

run();