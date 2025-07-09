// 1. Créer un tableau avec deux livres
const allBooks = [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      image: "https://m.media-amazon.com/images/I/41aQPTCmeVL.jpg",
      alreadyRead: true
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
      alreadyRead: false
    }
  ];
  
  // 2. Sélectionner la section où on va afficher les livres
  const bookSection = document.querySelector(".listBooks");
  
  // 3. Parcourir chaque livre et créer les éléments à afficher
  allBooks.forEach(book => {
    // Créer le conteneur div
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
  
    // Si le livre est déjà lu, on applique une classe rouge
    if (book.alreadyRead) {
      bookDiv.classList.add("read");
    }
  
    // Créer les éléments texte et image
    const bookText = document.createElement("p");
    bookText.textContent = `${book.title} written by ${book.author}`;
  
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.alt = `${book.title} cover`;
  
    // Ajouter les éléments dans la div
    bookDiv.appendChild(bookText);
    bookDiv.appendChild(bookImage);
  
    // Ajouter la div dans la section
    bookSection.appendChild(bookDiv);
  });
  