// IIFE qui ajoute le nom de l'utilisateur dans la navbar (sans photo)
(function (username) {
    const navbar = document.getElementById('navbar');
  
    // Crée l'élément qui affichera le nom
    const nameSpan = document.createElement('span');
    nameSpan.className = 'username';
    nameSpan.textContent = username;
  
    // L'ajoute à la navbar
    navbar.appendChild(nameSpan);
  })('John'); // <- remplace "John" par le nom connecté
  