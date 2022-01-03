// imports
const express = require('express');
const mysql = require('mysql2');


//port designation
const PORT = process.env.PORT ||3002;
const app = express();

// Express middleware
app.use(express.urlencoded({extend: false}));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '26374891ZAxs!@',
    database: 'election'
  },
  console.log('connected to database election')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
})

app.get('/',(req, res) => {
  res.json({
    message: 'Hello me'
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});