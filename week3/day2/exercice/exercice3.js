const repetitions = 1;

for (let i = 1; i <= repetitions; i++) {
  let input = prompt("Entrer un nombre " + i + " :");
  let number = Number(input);

  if (isNaN(number)) {
    alert(" Erreur : Vous n'avez pas entré un nombre !");
  } else {
    alert("Votre nombre est :", number);
  }
}
