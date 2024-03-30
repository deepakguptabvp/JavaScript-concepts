//----------------------------Currying---------------------- 
function compose(...fns) {
  return function (x) {
    return fns.reduceRight((y, f) => f(y), x);
  };
}

const f1 = (x) => x + 1;
const f2 = (x) => x * 2;
const f3 = (x) => x - 3;

const composedFunction = compose(f1, f2, f3);

const result = composedFunction(5);
console.log(result);

// ques-- create a sum(2)(6)(1) function to get the result.
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c
//     }
//   }
// }

// console.log(sum(2)(6)(1));

// ques 2 - evaluate this below 
// evaluate ("sum")(4)(2)=>6
// evaluate ("substract")(4)(2)=>2
// evaluate ("multiply")(4)(2)=>8
// evaluate ("divide")(4)(2)=>2

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       else if (operation === "substract") return a - b;
//       else if (operation === "multiply") return a * b;
//       else if (operation === "divide") return a / b;
//       else return "Invalid operation !!"
//     }
//   }
// }

// console.log(evaluate("sum")(4)(2))
// console.log(evaluate("substract")(4)(2))
// console.log(evaluate("multiply")(4)(2))
// console.log(evaluate("divide")(4)(2))


// const array=[1,4,9];
// console.log(2 in array);




console.log(1 + '2' + 3 - '4' + 5);


