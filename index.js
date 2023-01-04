const fs = require('fs');
const express = require('express');
const app = express();
const port=3000;
app.use(express.json());
app.get("/",(req,res)=>{
 res.send('<h1>Hello</h1>')
})
app.get('/products', (req, res) => {
    fs.readFile('database.json', (err, data) => {
      if (err) {
        res.status(500).send('Error reading file');
      } else {
        const db = JSON.parse(data);
        console.log(db,'15');
        // res.send(db.products)
        // res.send(db.products[0])
        res.send(db.products[0].name);
      }
    });
  });
app.get('/show', (req, res) => {
  fs.readFile('database.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    console.log(jsonData,'24');
    const x = jsonData.x;
    console.log(x,'26')
    const html = `<h1>Hey the value of x is ${x}</h1>`;
    res.send(html);
  });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });