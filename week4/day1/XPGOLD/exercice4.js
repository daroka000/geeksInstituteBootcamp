//Analyse the code below, and before executing it, predict the outcome of the last line.
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
console.log (add5(12))
//output is : 17