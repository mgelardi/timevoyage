// server.js
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;

const connection = mysql.createConnection({
    connectionLimit: 10,
    host: 'timevoyagedb.crm0qiaemqmq.eu-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'P4p3r1n0!',
    database: 'tvdb'
});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to database:', error);
        return;
    }
    console.log('Connected to database');
});

app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM your_table', (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});