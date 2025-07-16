function kgtoGrams(weight) {
    return weight * 1000;
  }
  console.log(kgtoGrams(50)); 
  
  const kgtoGramsExpr = function(weight) {
    return weight * 1000;
  };
  
  console.log(kgtoGramsExpr(10));
  
// Q3 Function declarations are hoisted; function expressions are not.
const kgtoGramsArrow = weight => weight * 1000;
console.log(kgtoGramsArrow(10)); 



const kg=(w)=>w*1000
console.log(kg(20))