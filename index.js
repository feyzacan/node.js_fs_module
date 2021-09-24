const fs = require('fs');





fs.writeFile('employees.json', '{"name": "JSON", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("SAVED SUCCESFULLY!")
});


fs.readFile('employees.json', (err, data) => {
    if (err) console.log(err);
    console.log(data);
});

fs.appendFile('employees.json', '\n HELLO!', (err) => {
    if (err) console.log(err);
    console.log('The data has been appended succesfully!');
  });

  fs.rmdir('employees.json', { recursive: true }, (err) => {
    if (err) console.log(err);
  });