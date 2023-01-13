const express = require('express');
const db = require("../config/db");
const cors = require('cors');
var bodyParser = require("body-parser");

const db_name = 'react_connect';
const table_name = 'users';

const PORT = 6969;

const app = express();
app.use(cors('*'));


app.use(bodyParser.json());

app.get('/api/get', (req, res) => {
    console.log("GET request received");
    db.query(`SELECT * FROM ${table_name}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

// Route to get one post
app.get("/api/getFromId/:id", (req, res) => {

    const id = req.params.id;
    db.query(`SELECT * FROM ${table_name} WHERE id = ?`, id,
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        });
});

// Route for creating the post
app.post('/api/insert', async (req, res) => {
    console.log("POST INSERT request received");

    const username= req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query(`INSERT INTO ${table_name} (username, email, password) VALUES (?,?,?)`, [username, email, password], (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

module.exports = app;