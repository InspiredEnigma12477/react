const express = require('express')();
const db = require('./config/db');
const cors = require('cors');
const e = require('express');

const app = express();

const PORT = 6969;

app.get('/api/get', (req,res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})