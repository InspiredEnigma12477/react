const mysql = require('mysql');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
});

connection.connect();

app.use(bodyParser.json());

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, rows) => {
        if (err) {
            res.status(500).send
        } else {
            res.send(rows);
        }
    });
});

app.post('/users', (req, res) => {
    const user = req.body;
    connection.query('INSERT INTO users SET ?', user, (err, result) => {
        if (err) {
            res.status(500).send
        } else {
            res.send(result);
        }
    });
}

module.exports = app;