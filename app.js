var express = require('express');
var app = express();
const port=3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.json());

app.get('/',function(req,res){
  console.log("hello");
  console.log(req.headers,'11');
  console.log(req.query);
    res.render('input');
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  console.log(name,email);
  console.log(req.body); // log the data that was sent with the request
  res.render('success', { name: name, email: email });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
