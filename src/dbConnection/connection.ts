import { MongoClient,Db } from 'mongodb';


let dbInstance: Db | null = null;

export const DBConnection = async (): Promise<Db> => {
      if (dbInstance) return dbInstance;

       const uri = process.env.DB_CONNECTION_URI as string;
       const dbName = process.env.DB_NAME as string;

       const client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as any);

        dbInstance = client.db(dbName);
        return dbInstance;
}