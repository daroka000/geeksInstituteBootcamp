const element=document.getElementById("container");
console.log(element);
const change_name=document.querySelectorAll("ul.list");
change_name[0].children[1].textContent="Richard";
change_name[1].removeChild(change_name[1].children[1]);
change_name[1].children[1].textContent="Daroka";



change_name.forEach(ul => {
    ul.classList.add("student_list");
});

change_name[0].classList.add("university", "attendance");


// 1. Changer le background du <div> et ajouter du padding
const container = document.getElementById("container");
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// 2. Cacher le <li> qui contient "Dan" (dernier élément du 1er <ul>)
const lists = document.querySelectorAll("ul.list");
const firstUl = lists[0];
const danLi = firstUl.lastElementChild;
if (danLi.textContent === "Dan") {
    danLi.style.display = "none";
}

// 3. Ajouter une bordure au <li> "Richard" (2e li du 1er <ul>)
const richardLi = firstUl.children[1]; // index 1 = 2e enfant
if (richardLi.textContent === "Richard") {
    richardLi.style.border = "2px solid black";
}

// 4. Changer la taille de police de tout le body
document.body.style.fontSize = "18px";

// BONUS: Si le fond est lightblue → afficher "Hello x and y"
if (container.style.backgroundColor === "lightblue") {
    // Récupérer les deux premiers noms dans le premier <ul>
    const name1 = firstUl.children[0].textContent;
    const name2 = firstUl.children[1].textContent;
    alert(`Hello ${name1} and ${name2}`);
}


