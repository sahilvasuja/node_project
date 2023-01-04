const fs = require('fs');

const data = { x: 5, y:7 };
// // create
fs.writeFile('store.json', JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log('Data written to file');
  
});

// //read
fs.readFile('store.json', (err, data) => {
    if (err) throw err;
  
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  });
// update
fs.readFile('store.json', (err, data) => {
    if (err) throw err;
  
    const jsonData = JSON.parse(data);
    jsonData.x = 10;
    
    fs.writeFile('store.json', JSON.stringify(jsonData), (err) => {
      if (err) throw err; 
      console.log('Data updated');
    });
  });


  // fs.writeFile('store.json', '{"y":7}', (err) => {
  //   if (err) throw err;
    
  //   console.log('Data deleted');
  // });

//   delete
// fs.unlink('store.json', (err) => {
//   if (err) throw err;
//   console.log('File deleted');
// });