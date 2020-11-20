const url = require('url')
const MongoClient = require('mongodb').MongoClient

const mongoUrl = 'mongodb+srv://root:NXYzvb6f1Px4ME0s@cluster0.3gdd7.mongodb.net/catpics?retryWrites=true&w=majority';

let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = await client.db('catpics');

  cachedDb = db;
  return db;
}
