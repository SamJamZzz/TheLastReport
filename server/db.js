import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let dbConnection;
let uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kmvwydh.mongodb.net/?retryWrites=true&w=majority`;

export const connectToDb = (cb) => {
  MongoClient.connect(uri)
  .then(client => {
    dbConnection = client.db();
    cb();
  })
  .catch(err => {
    console.log(err);
    return cb(err);
  });
}

export const getDb = () => dbConnection;