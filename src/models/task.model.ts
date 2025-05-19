import { ObjectId } from 'mongodb';
import { getCollection } from '../config/collections';
import { PriorityEnum } from '../utils/PriorityEnum';

export interface Task {
  _id?: ObjectId;
  title: string;
  description: string;
  dueDate: string;
  priority: PriorityEnum;
  status:string;
  createdBy?:string;
}

export const getTasks = async (): Promise<Task[]> => {
    const tasksCollection = await getCollection<Task>('tasks');
    return await tasksCollection.find({}).toArray();
} 

export const getTaskById = async (taskId: string): Promise<Task  | null>  => {
    const tasksCollection = await getCollection<Task>('tasks');
    const task =  await tasksCollection.findOne({
        _id: new ObjectId(taskId)
    });

    if (!task) {
        throw new Error('Task not found');
    }
    return task;
}

export const create = async (task: Task): Promise<Task> => { 
    const tasks = await getCollection<Task>('tasks');
    const result = await tasks.insertOne(task);
    const insertedTask = await tasks.findOne({ _id: result.insertedId });
    if (!insertedTask) {
        throw new Error('Failed to find the inserted task');
    }
    return insertedTask;
}

export const updateTaskById = async (taskId: string, updateData: Task): Promise<Task | null> => {

    const tasks = await getCollection<Task>('tasks');
    const result = await tasks.findOneAndUpdate({ _id: new ObjectId(taskId) },{ $set: updateData },{ returnDocument: 'after' });

    if (!result) {
        throw new Error('Task not found');
    }
    return result;
}

export const deleteTaskById =  async (taskId: string): Promise<boolean> => { 
     const tasks = await getCollection<Task>('tasks');

     const result = await tasks.deleteOne({ _id: new ObjectId(taskId) });
     return result.deletedCount === 1;
}