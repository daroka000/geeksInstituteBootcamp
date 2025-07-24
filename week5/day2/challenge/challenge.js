const form = document.querySelector("form");
const input = document.getElementById("inputid");
const container = document.getElementById("container");
const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Crée le bouton "DELETE ALL" et l’ajoute à la page
const deleteAllButton = document.createElement("button");
deleteAllButton.textContent = "DELETE ALL";
deleteAllButton.style.margin = "10px";
document.body.insertBefore(deleteAllButton, container);

// Fonction pour récupérer un GIF aléatoire
async function fetchRandomGif(category) {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(category)}&rating=g`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        if (!data.data || !data.data.images) {
            container.innerHTML += `<p style="color:red;">Aucun GIF trouvé pour "${category}".</p>`;
            return;
        }

        // Créer un conteneur pour le GIF et le bouton DELETE
        const gifBox = document.createElement("div");
        gifBox.style.marginBottom = "10px";

        const img = document.createElement("img");
        img.src = data.data.images.original.url;
        img.alt = category;
        img.style.width = "200px";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        deleteButton.style.marginLeft = "10px";

        deleteButton.addEventListener("click", () => {
            gifBox.remove();
        });

        gifBox.appendChild(img);
        gifBox.appendChild(deleteButton);
        container.appendChild(gifBox);
    } catch (error) {
        console.error("Erreur :", error.message);
        container.innerHTML += `<p style="color:red;">Erreur : ${error.message}</p>`;
    }
}

// Gestion de la soumission du formulaire
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const category = input.value.trim();
    if (category) {
        fetchRandomGif(category);
        input.value = "";
    }
});

// Supprimer tous les GIFs
deleteAllButton.addEventListener("click", () => {
    container.innerHTML = "";
});
