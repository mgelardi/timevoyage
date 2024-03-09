const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// MySQL database configuration
const connection = mysql.createConnection({
  host: 'Ytimevoyagedb.crm0qiaemqmq.eu-west-1.rds.amazonaws.com',
  user: 'admin',
  password: 'P4p3r1n0!',
  database: 'tvdb'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Define routes for interacting with database
app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM persons', (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
