import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import directoryRoutes from './routes/directoryRoutes.js';
import taskRoutes from './routes/taskRoutes.js';


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/directories', directoryRoutes);
app.use('/api/tasks', taskRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
