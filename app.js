var express = require('express');
var app = express();
const port=3000;

app.get('/',function(req,res){
    res.send( ` <h1>Good Afternoon</h1><a href="/hello">Go to Hello Page</a> `);
})

app.get('/hello', function(req, res){
   res.send(`
   <h1>Hello World!</h1> <a href="/about">Go to About Page</a>
   `
   );
});
app.get('/about',function(req,res){
    res.send(`<h2>About Page</h2>
    <a href="/">Go to Home Page</a>
    `)
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
