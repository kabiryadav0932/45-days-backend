console.log(b);
console.log(a);

let a = 10;
var b = 100;

/*

here you can access b before initilizing it, the output of b will be ;undefined' because of hoisting, var works different, but in case of a, the output will be error, becuse let keyword is not like var. "a" is not hoisted.

var is in global space, whereas let and const is in different space, this is the reason of throwing the error( refrence error). 

what is TDZ?(temporal dead zone)

it is the time, when a let is hoisted and till it is initilize some valve, the time between them is called TDZ.

*/