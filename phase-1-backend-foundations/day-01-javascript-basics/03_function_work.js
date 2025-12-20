let x = 1;
a();
b();
console.log(x);

function a() {
    let x = 10;
    console.log(x);
}

function b() {
    let x = 20;
    console.log(x);
}



// output :-

// 10
// 100
// 1



/*
What is hapenning in this code ?

first, a global execution will be created with memory and code, where, in memory section x will be created with undefind, a will point to the function and b will also point to the function, both will created with undefined value.

after putting undefined at line no.1, it will move to line no.2, line 2 is a function where x is variable, now it created a execution space for a() variable then after line 8 it will print the a() at line 2,

then it will move to line 3 and will point to line 11, then at 12th line it will create another execution space and place undefined at x ( x = undefined), then after line 13 it will move to line 3 and then line 4, 

at line 4, undefined will be replace with 1,


remember if execution is created, then after performing the task it will delete also, like for a(), it created but it is deleted after completign the process, same as globlal exectuion, if nothing is there to put in memory space (all the work is done), then it will delete the the global execution also.


that's how the code work and how the function works
*/