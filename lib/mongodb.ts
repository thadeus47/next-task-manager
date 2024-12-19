import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
let client: MongoClient;
let db: Db;

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

export async function connectToDatabase() {
  if (client && db) {
    return { client, db };
  }

  client = await MongoClient.connect(uri);
  db = client.db();

  return { client, db };

}