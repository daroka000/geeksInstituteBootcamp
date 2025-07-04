// 1 Création de l'objet family
const family = {
    father: "Ali",
    mother: "Nadia",
    son: "Youssef",
    daughter: "Sara"
  };
  
  // 2 Afficher les clés avec une boucle for...in
  console.log(" Les clés de l'objet family :");
  for (let key in family) {
    console.log(key);
  }
  
  // 3 Afficher les valeurs avec une boucle for...in
  console.log(" Les valeurs de l'objet family :");
  for (let key in family) {
    console.log(family[key]);
  }
  