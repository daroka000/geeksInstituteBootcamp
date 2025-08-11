import { readTasks, writeTasks } from '../modules/modules.task.js';
import { taskSchema } from '../schema/schema.js';

export function getAllTasks(req, res) {
  const tasks = readTasks();
  res.json(tasks);
}

export function getTaskById(req, res) {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
}

export function createTask(req, res) {
  const { error } = taskSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const tasks = readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    ...req.body
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
}

export function updateTask(req, res) {
  const { error } = taskSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  tasks[index] = { id: tasks[index].id, ...req.body };
  writeTasks(tasks);
  res.json(tasks[index]);
}

export function deleteTask(req, res) {
  const tasks = readTasks();
  const newTasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  if (tasks.length === newTasks.length) {
    return res.status(404).json({ message: 'Task not found' });
  }
  writeTasks(newTasks);
  res.json({ message: 'Task deleted successfully' });
}
