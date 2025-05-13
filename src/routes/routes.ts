import express from 'express';
import { deleteTask, getAllTasks, getTask, saveTask, updateTask } from '../controller/TaskController';

const router = express.Router();

router.get('/task', getAllTasks);
router.get('/task/:id', getTask);
router.post('/task', saveTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

export default router;