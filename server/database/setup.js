require('dotenv').config();
const fs = require('fs');
const db = require('./connect');

const sql = fs.readFileSync(__dirname + '/diary.sql').toString();

db.query(sql)
  .then(data => {
    db.end();
    console.log("Setup complete");
  })
  .catch(error => console.log(error));

