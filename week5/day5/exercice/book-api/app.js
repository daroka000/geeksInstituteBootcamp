const express = require('express');
const app = express();

//middleware
app.use(express.json());


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

const Books=[
    {
        id:1,
        title:"dernier jour d un condamne",
        author:"john kali",
        publishedYear:2002
    },
    {
    id: 2,
    title: "Le Comte de Monte-Cristo",
    author: "Alexandre Dumas",
    publishedYear: 1844
  }
];
//get all books
app.get('/api/books',(req,res)=>{
    res.json(Books);
});
//get book par id 
app.get('/api/books/:bookId', (req, res) => {
    try {
      const id = Number(req.params.bookId);
      const book = Books.find(book => book.id === id);
  
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
  
      res.json(book);
      
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  // POST NEW BOOK
  app.post('/api/books',(req,res)=>{
    try
    {const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
    return res.status(400).json({ error: "Title, author, and publishedYear are required" });
  }
  const newBook = {
    id: Books.length > 0 ? Books[Books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear
  };
  Books.push(newBook);
  res.status(201).json({
    message: "Book created successfully",
    book: newBook
  });}catch(error){
    res.status(500).json({ error: "Internal server error" });
  }
});
//put by id
app.put('/api/books/:id',(req,res)=>{
    try
    {const bookID=Number(req.params.id);
    const {title,author,publishedYear}=req.body;
    const index=Books.findIndex(book=>book.id===bookID);
    if(index=== -1){
        return res.status(404).json({ error: "Book not found" });
    }
    if (title) Books[index].title = title;
    if (author) Books[index].author=author;
    if (publishedYear) Books[index].publishedYear=publishedYear;
    res.json({
        message: "Book updated successfully",
        book: Books[index],
        Put: true,
      });}catch(error){
        res.status(500).json({ error: "Internal server error" });

      }
});
app.delete('/api/books/:id',(req,res)=>{
    try{
        const bookId = Number(req.params.id);
        const index = Books.findIndex(book => book.id === bookId);

        if (index === -1) {
            return res.status(404).json({ error: "Book not found" });
  }
        const deletedBook = Books.splice(index, 1)[0];
        res.json({
        message: "Book deleted successfully",
        deleted: deletedBook
  });}catch(error){
    res.status(500).json({ error: "Internal server error" });

  }
});




    
