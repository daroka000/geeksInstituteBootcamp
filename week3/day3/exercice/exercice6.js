// 1. Changer l'ID de la div avec setAttribute
const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

// 2. Créer un nouvel élément <li>
const newLi = document.createElement("li"); // crée un <li>
const textNode = document.createTextNode("Logout"); // crée le texte "Logout"
newLi.appendChild(textNode); // ajoute le texte dans le <li>

// 3. Ajouter le nouveau <li> à la <ul>
const ul = document.querySelector("#socialNetworkNavigation ul");
ul.appendChild(newLi); // ajoute <li>Logout à la fin

// 4. Récupérer le premier et le dernier <li> de la <ul>
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

// 5. Afficher le texte de ces éléments
console.log("First link:", firstLi.textContent);   // Affiche "Profile"
console.log("Last link:", lastLi.textContent);     // Affiche "Logout"
