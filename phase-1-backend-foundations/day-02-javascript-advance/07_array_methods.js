// MAP map() --> transform each element
// map() creates a new array by applying a function to every element.


// example
const numbers1 = [1, 2, 3, 4];
const doubled = numbers1.map(num => num*2);
console.log(doubled);


// FILTER filter() 
// filter() creates a new array with elements that pass a condition.

const numbers2 = [1, 2, 3, 4, 5];
const evens = numbers2.filter(num => num % 2 === 0);
console.log(evens);


// REDUCE reduce()
// reduce() reduces an array to a single value.
// Sum, product, object, string, etc.

const numbers3 = [1, 2, 3, 4];
const sum = numbers3.reduce((acc,num) => {
    return acc + num;
},0);
console.log(sum);
