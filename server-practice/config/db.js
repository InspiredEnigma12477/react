const mysql = require('mysql2');
const db_name = 'react_connect';
const table_name = 'users';


const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "1234567890",
    database: "react_connect",
    insecureAuth: true,
    port: 3306
});
console.log("Connecting to MySQL...");


db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
}
);

// Create a database named db_name if it doesn't exist already":
db.query(`CREATE DATABASE IF NOT EXISTS ${db_name}`, (err, result) => {
    if (err) throw err;
    console.log("Database created");
});


// Use the database db_name:
db.query(`USE ${db_name}`, (err, result) => {
    if (err) throw err;
    console.log("Using " + db_name);
});


// Create a table named user if it doesn't exist already:
db.query(`CREATE TABLE IF NOT EXISTS ${table_name} (username VARCHAR(255), email VARCHAR(255), password VARCHAR(255))`, function (err, result) {
    if (err) throw err;
    console.log(`Table created ${table_name}`);
});


module.exports = db;
