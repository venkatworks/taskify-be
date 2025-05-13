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

export const create = async (task: Task): Promise<ObjectId> => { 
    const tasks = await getCollection<Task>('tasks');
    const result = await tasks.insertOne(task);
    return result.insertedId;
}

export const updateTaskById = async (taskId: string, updateData: Task): Promise<Task | null> => {

    const tasks = await getCollection<Task>('tasks');
    const task = await tasks.findOneAndUpdate({ _id: new ObjectId(taskId) },{ $set: updateData },{ returnDocument: 'after' });

    if (!task) {
        throw new Error('Task not found');
    }

    return task;
}

export const deleteTaskById =  async (taskId: string): Promise<boolean> => { 
     const tasks = await getCollection<Task>('tasks');

     const result = await tasks.deleteOne({ _id: new ObjectId(taskId) });
     return result.deletedCount === 1;
}