const url = require('url')
const MongoClient = require('mongodb').MongoClient

const mongo_uri = process.env.MONGODB_URI;

mongoose.connect(mongo_uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: 'cat'
  }
);

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
