"use strict";

const arr = [1, 22 ,3, 24, 5, 7];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}



// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(9);

// console.log(arr);

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));
