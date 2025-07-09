// Données : tableau d'objets représentant les planètes
const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "yellow", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "orange", moons: 79 },
    { name: "Saturn", color: "goldenrod", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];

// Sélectionner la section dans laquelle on va ajouter les planètes
const section = document.querySelector(".listPlanets");

// Parcourir chaque planète
planets.forEach(planet => {
    // Créer le <div> planète
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;

    // Ajouter le nom de la planète dans la div
    planetDiv.textContent = planet.name;

    // Ajouter la planète à la section
    section.appendChild(planetDiv);

    // Créer les lunes
    for (let i = 0; i < planet.moons; i++) {
        const moon = document.createElement("div");
        moon.classList.add("moon");

        // Position aléatoire autour de la planète
        moon.style.left = `${100 + (i * 35)}px`;
        moon.style.top = `${Math.random() * 80}px`;

        // Ajouter la lune à la planète
        planetDiv.appendChild(moon);
    }
});
