let age = [20,5,12,43,98,55];


// 1
let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum += age[i];
}
console.log("La somme des âges est :", sum);

// 2
let max = age[0]; 
for (let i = 1; i < age.length; i++) {
  if (age[i] > max) {
    max = age[i];
  }
}
console.log("L'âge le plus élevé est :", max);
