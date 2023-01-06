const express = require('express');
const app = express();
const fs=require('fs');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  fs.readFile('database.json',(err,data)=>{
    if(err) throw err;
    let jsonData=JSON.parse(data);
    res.render('index',{todo:jsonData});
  })
  // res.render('index');
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
        // res.redirect('/');
        res.render('index',{todo:jsonData});
        console.log(jsonData);
      });
    });
  });

  app.get('/delete-todo/:id',(req,res)=>{
    const id=req.params.id;
    // console.log(id);
    fs.readFile('database.json',(err,data)=>{
      if(err)
      throw err;
      let jsonData=JSON.parse(data);
      jsonData.splice(id,1);
      fs.writeFile('database.json', JSON.stringify(jsonData), (err) => {
        if (err) throw err;
        console.log('Data written to file');
      });
    });
    console.log("Deleted Todo Successfully!");
          res.redirect("/");
  });

  

app.listen(3000, () => {
  console.log('App listening on port 3000');
});