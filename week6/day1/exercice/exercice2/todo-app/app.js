const express = require('express');
const app = express();
const todosRouter = require('./routes/todos');

app.use(express.json()); // Permet de lire le JSON dans req.body

// Montage du routeur
app.use('/todos', todosRouter);

// Démarrage du serveur
const port = 5000;
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
