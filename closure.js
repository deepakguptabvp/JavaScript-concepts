// closure's in javascript
function makeFunc() {
    var name = "Deepak"
    function displayName() {
        console.log(name);
    }
    return displayName;
}
let myFunc = makeFunc();
console.log(myFunc());


// closure scope chain example
var e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + e;
            }
        }
    }
}
console.log(sum(1)(2)(3)(4));

// ques - 2 

// let count = 0;
// (function printCount() {
//     if (count === 0) {
//         let count = 1;
//         console.log(count);
//     }
//     console.log(count);
// })();


// create a function that would allow you to do this.....
var addSix = createBase(6);
addSix(10);
addSix(21);

function createBase(num) {
    return function addSix(innerNum) {
        console.log(innerNum + num);
    }
}
