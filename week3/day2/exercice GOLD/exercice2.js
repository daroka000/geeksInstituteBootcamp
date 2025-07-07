let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  };

  const text = document.getElementById("text")

  
  // Demande à l'utilisateur d'entrer son nom
  let name = prompt("What is your name ?");
  
  // Convertir en minuscule pour correspondre aux clés
  let lowerCaseName = name.toLowerCase()
  console.log(lowerCaseName);
  
  // Vérifie si le nom existe dans guestList
  if (lowerCaseName in guestList) {
    let country = guestList[lowerCaseName];
    console.log(`Hi! I'm ${lowerCaseName}, and I'm from ${country}.`);
    text.textContent=`Hi! I'm ${lowerCaseName}, and I'm from ${country}.`
} else {
    console.log("Hi! I'm a guest.");
    text.textContent = "Hi! I'm a guest."
  }
  