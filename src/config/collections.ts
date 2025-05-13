import { Collection, Document } from 'mongodb';
import { DBConnection } from '../dbConnection/connection';

const collections: Record<string, Collection<Document>> = {};

export const getCollection = async <T extends Document = Document>(name: string): Promise<Collection<T>> => {
  if (collections[name]) {
    return collections[name] as unknown as Collection<T>;
  }
  const db = await DBConnection();
  const collection = db.collection<T>(name);
  collections[name] = collection as unknown as Collection<Document>;
  return collection;
};