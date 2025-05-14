import { Request, Response } from "express"
import { create, deleteTaskById, getTaskById, getTasks, updateTaskById } from "../models/task.model";

export const getAllTasks = async (request:Request, response: Response) => {
    try {
        const tasks = await getTasks();
        response.status(200).send(tasks)
    } catch(error) {
        response.status(500).json({ error: 'fetch failed', details: (error as Error).message });
    }
}

export const getTask = async (request:Request, response: Response) => {
    try {
        const {id} = request.params
        const task = await getTaskById(id);
        response.status(200).send(
            task
        )
    } catch(error) {
        response.status(500).json({ error: 'fetch failed', details: (error as Error).message });
    }
}

export const saveTask = async (request:Request, response: Response) => {
  try {
     const id = await create(request.body);
     response.status(201).json({ message: 'Task created', id });
  } catch (error) {
     response.status(500).json({ error: 'Create failed', details: (error as Error).message });
  }
}

export const updateTask = async  (request:Request, response: Response) => {
    try {
        const {id} = request.params;
        const updateData = await updateTaskById(id, request.body);
        response.status(201).json({ task: updateData});
    } catch(error) {
        response.status(500).json({ error: 'update failed', details: (error as Error).message });
    }
    
}

export const deleteTask = async (request:Request, response: Response) => {
    try {
        const {id} = request.params;
        const deleteStatus = await deleteTaskById(id);
        response.status(204).json({ task: deleteStatus});
    } catch(error) {
        response.status(500).json({ error: 'deletion failed', details: (error as Error).message });
    }
}

