const libButton = document.getElementById("lib-button");
const shuffleButton = document.getElementById("shuffle-button");
const storySpan = document.getElementById("story");

let userWords = {}; // pour stocker les mots saisis
let storyTemplates = [
  ({ noun, adjective, person, verb, place }) =>
    `${person} went to ${place} with a very ${adjective} ${noun} and decided to ${verb}.`,
  ({ noun, adjective, person, verb, place }) =>
    `At ${place}, ${person} suddenly saw a ${adjective} ${noun} trying to ${verb}!`,
  ({ noun, adjective, person, verb, place }) =>
    `Can you believe ${person} wanted to ${verb} a ${adjective} ${noun} in ${place}?`
];

// Génère une histoire aléatoire
function generateRandomStory(words) {
  const index = Math.floor(Math.random() * storyTemplates.length);
  return storyTemplates[index](words);
}

// Soumission du formulaire
libButton.addEventListener("click", function (event) {
  event.preventDefault();

  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all the fields.");
    return;
  }

  userWords = { noun, adjective, person, verb, place };
  storySpan.textContent = generateRandomStory(userWords);

  // Affiche le bouton Shuffle après génération initiale
  shuffleButton.style.display = "inline-block";
});

// Bouton Shuffle
shuffleButton.addEventListener("click", function () {
  if (Object.keys(userWords).length > 0) {
    storySpan.textContent = generateRandomStory(userWords);
  }
});
