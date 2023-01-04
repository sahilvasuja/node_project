const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
// console.log(__dirname,"../public")
// const staticPath=path.join(__dirname,'../public');
// console.log(staticPath)
//  app.use(express.static(staticPath));
 app.use(express.static('public'));
 app.get("/about", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
    res.send("About");
  });
app.get("/", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
    res.send("Hlo");
    //   res.sendFile(__dirname + "/public/Home.html");
  });
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
