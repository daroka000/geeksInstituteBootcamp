import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {
  addUser, getAllUsers, getUserById,
  updateUser, getHashedPassword
} from '../models/users.models.js';

export async function register(req, res) {
  try {
    const { email, username, first_name, last_name, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const id = await addUser({ email, username, first_name, last_name }, hashed);
    res.json({ message: 'User registered', userId: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const userPwd = await getHashedPassword(username);
    if (!userPwd) return res.status(401).json({ error: 'User not found' });

    const match = await bcrypt.compare(password, userPwd.password);
    if (!match) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getUsers(req, res) {
  const users = await getAllUsers();
  res.json(users);
}

export async function getUser(req, res) {
  const user = await getUserById(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
}

export async function updateUserInfo(req, res) {
  try {
    await updateUser(req.params.id, req.body);
    res.json({ message: 'User updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
