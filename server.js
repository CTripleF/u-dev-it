// imports
const express = require('express');

//port designation
const PORT = process.env.PORT ||3002;
const app = express();

// Express middleware
app.use(express.urlencoded({extend: false}));
app.use(express.json());

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