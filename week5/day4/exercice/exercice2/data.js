import { persone } from './app.js';

for (const person of persone) {
  console.log(person.name, person.age, person.location);
 
}

function averageage() {
  let totalage = 0;

  for (const item of persone) {
    totalage += item.age;
  }

  const average = totalage / persone.length;
  console.log(" total averge age is:", average);
}

averageage();
console.log("-----affihage -------------------")
console.log(persone);
