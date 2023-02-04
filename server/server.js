import express from 'express';

// init app and middleware
const app = express();

app.listen(3000, () => {
  console.log('App listening on port 3000');
})

app.get('/reports', (req, res) => {
  res.json({msg: 'Welcome to our app!'})
})