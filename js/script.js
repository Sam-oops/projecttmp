"use strict";

function ret() {
    let num = 50;
    return num;
}

let anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('hello');
};

logger();

const calc = (a, b) => a + b;