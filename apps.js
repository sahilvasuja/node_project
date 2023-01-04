const express = require('express');
const app = express();

app.use(express.json()); // parse request body as JSON

app.get('/data', (req, res) => {
  console.log(req.query); // log the query string parameters
  res.send('Data received');
});

app.post('/data', (req, res) => {
  console.log(req.body); // log the data in the request body
  res.send('Data received');
});

app.listen(3000, () => console.log('Server listening on port 3000'));