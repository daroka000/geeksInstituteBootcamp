import express from 'express';
import tasksRoutes from './routes/routes.js';

const app = express();
app.use(express.json());

app.use('/tasks', tasksRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
