// server.js
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;

const connection = mysql.createConnection({
    host: 'timevoyagedb.crm0qiaemqmq.eu-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'P4p3r1n0!',
    database: 'tvdb'
});

app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM persons', (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
