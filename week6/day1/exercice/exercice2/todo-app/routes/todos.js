const express = require('express');
const router = express.Router();

// Base de données en mémoire
const todos = [];

// POST: Ajouter une tâche
router.post('/', (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ success: false, message: "Title is required" });
    }

    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false
    };

    todos.push(newTodo);

    res.status(201).json({
      success: true,
      data: newTodo
    });
  } catch (error) {
    console.error('Error in POST /todos:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// GET: Récupérer toutes les tâches
router.get('/', (req, res) => {
  res.json({ success: true, data: todos });
});

// PUT: Mettre à jour une tâche
router.put('/:id', (req, res) => {
  try {
    const todoId = parseInt(req.params.id);
    const { title, completed } = req.body;

    const todo = todos.find(t => t.id === todoId);
    if (!todo) {
      return res.status(404).json({ success: false, message: 'To-do item not found' });
    }

    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.json({
      success: true,
      data: todo
    });
  } catch (error) {
    console.error('Error in PUT /todos/:id:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

//  DELETE: Supprimer une tâche
router.delete('/:id', (req, res) => {
  try {
    const todoId = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === todoId);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'To-do item not found' });
    }

    todos.splice(index, 1);

    res.json({
      success: true,
      message: `To-do with id ${todoId} deleted`,
      data: todos
    });
  } catch (error) {
    console.error('Error in DELETE /todos/:id:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
