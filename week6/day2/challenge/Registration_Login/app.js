import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/users.routes.js';
import { createTables } from './models/users.models.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());

await createTables();

app.use('/', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
