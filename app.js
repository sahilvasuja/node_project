const express = require('express');
const app = express();
const fs=require('fs');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});
app.post('/add-todo', (req, res) => {
    const todo = req.body.todo;
    console.log("todo 13",todo);
    fs.readFile('database.json', (err, data) => {
      if (err) throw err;
      console.log("todo 16",todo);
      let jsonData = JSON.parse(data);
      jsonData.push(todo);
  
      fs.writeFile('database.json', JSON.stringify(jsonData), (err) => {
        if (err) throw err;
        console.log('Todo added');
        res.redirect('/');
      });
    });
  });

app.listen(3000, () => {
  console.log('App listening on port 3000');
});