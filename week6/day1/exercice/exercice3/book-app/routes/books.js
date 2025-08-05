// routes/books.js
const express = require('express');
const router = express.Router();
// Base de données en mémoire
let books = [];
//GET tous les livres
router.get('/', (req, res) => {
  res.json({ success: true, data: books });
});

//POST ajouter un nouveau livre
router.post('/', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ success: false, message: 'Title and author are required' });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json({ success: true, data: newBook });
});

//PUT mettre à jour un livre par ID
router.put('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ success: false, message: 'Book not found' });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json({ success: true, data: book });
});

//DELETE supprimer un livre par ID
router.delete('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Book not found' });
  }

  const deletedBook = books.splice(index, 1);
  res.json({ success: true, data: deletedBook[0] });
});

module.exports = router;
