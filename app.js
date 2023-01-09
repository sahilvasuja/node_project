const express = require('express');
const app = express();
const fs=require('fs');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// home
app.get('/', (req, res) => {
  fs.readFile('database.json',(err,data)=>{
    if(err) throw err;
    let jsonData=JSON.parse(data);
    res.render('index',{todoValue:jsonData});
  })
  // res.render('index');
});
// add-todo
app.post('/add-todo', (req, res) => {
    const result = req.body.todo;
    console.log("19",result);
    fs.readFile('database.json', (err, data) => {
      if (err) throw err;
      console.log("22",result);
      let jsonData = JSON.parse(data);
      const todo = {
        task: result,
        isCompleted: false,
        isUpdated:false,
        id:Date.now()
      };
      jsonData.push(todo);
      fs.writeFile('database.json', JSON.stringify(jsonData), (err) => {
        if (err) throw err;
        console.log('Todo added');
        res.render('index',{todoValue:jsonData});
        console.log("34",jsonData);
      });
    });
  });
  // check
  app.get("/check/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id,"41")
    fs.readFile("database.json", (err, data) => {
      if (err) throw err;
      const jsonData = JSON.parse(data);
      jsonData[id].isCompleted=!jsonData[id].isCompleted
      console.log("47",jsonData);
      fs.writeFile("database.json", JSON.stringify(jsonData), (err) => {
        if (err) throw err;
        console.log("checked");
      });
    });
    res.redirect("/");
  });
  // update
  // app.get("/update-todo/:id", (req, res) => {
  //   const id = req.params.id;
  //   console.log(id, "58");
  //   fs.readFile("database.json", (err, data) => {
  //     if (err) throw err;
  //     // const result = req.body.todo;
  //      const jsonData = JSON.parse(data);
  //     const todo = jsonData.find(todo => todo.id === id);
  //     //  const todoId = todo.id;
  //      console.log(`The ID of the todo is ${todoId}`);
  //     fs.writeFile("database.json", JSON.stringify(jsonData), (err) => {
  //       if (err) throw err;
  //       const todoId=req.params.id;
  //       console.log("76",todoId);
  //       console.log("Data updated");
  //     });
  //   });
  //   res.redirect("/");
  // });
// delete
  app.get('/delete-todo/:id',async(req,res)=>{
    const id=req.params.id;
    console.log("59",id);
    fs.readFile('database.json',(err,data)=>{
      if(err)
      throw err;
      let jsonData=JSON.parse(data);
      jsonData.splice(id,1);
      fs.writeFile('database.json', JSON.stringify(jsonData), (err) => {
        if (err) throw err;
        console.log('Data written to file');
        console.log("68",jsonData)
      });
    });
    console.log("Todo is deleted Successfully!");
          res.redirect("/");
  });

app.listen(3000, () => {
  console.log('App listening on port 3000');
});