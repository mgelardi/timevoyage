// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3306;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'timevoyagedb.crm0qiaemqmq.eu-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'P4p3r1n0!',
    database: 'tvdb'
});

app.get('/api/data', (req, res) => {
    pool.query('SELECT * FROM persons', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
