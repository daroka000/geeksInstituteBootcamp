const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
let str1 = numbers.toString();
console.log(" toString():", str1); 

let str2 = numbers.join("+");
console.log(" join('+'):", str2); 
let str3 = numbers.join(" ");
console.log("join(' '):", str3);
let str4 = numbers.join("");
console.log("join(''):", str4); 

let numbersToSort = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

console.log("Before sorting:", numbersToSort);

for (let i = 0; i < numbersToSort.length; i++) {
  for (let j = 0; j < numbersToSort.length - 1 - i; j++) {
    if (numbersToSort[j] < numbersToSort[j + 1]) {
      let temp = numbersToSort[j];
      numbersToSort[j] = numbersToSort[j + 1];
      numbersToSort[j + 1] = temp;
    }
  }
  console.log(`step ${i + 1}:`, numbersToSort);
}
console.log ("After descending sort:", numbersToSort);
