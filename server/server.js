import express, { json } from 'express';
import { connectToDb, getDb } from './db.js';

// init app and middleware
const app = express();

// db connection
let db;

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log('App listening on port 3000');
    });
    db = getDb();
  }
})

// routes
app.get('/reports', (req, res) => {
  let reports = [];

  db.collection('reports')
  .find()
  .forEach(report => reports.push(report))
  .then(() => res.status(200).json(reports))
  .catch(() => res.status(500).json({error: 'Could not fetch documents'}));
})