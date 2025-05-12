import express from 'express';
import { deleteTask, getTask, getTaskById, saveTask, updateTask } from '../controller/TaskController';

const router = express.Router();

router.get('/task', getTask);
router.get('/task/:id', getTaskById);
router.post('/ask', saveTask);
router.put('/task', updateTask);
router.delete('/task', deleteTask);

export default router;