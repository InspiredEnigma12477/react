// Requiring module
const express = require('express');
const app = express();

// Handling '/' request
app.get('/', (req, res) => {
	res.send('<h2>Hello from Express.js server!!</h2>');
});

// Handling '/about' request
app.get('/about', (req,res) => {
	res.send('<h2>GeeksforGeeks- Express.js</h2>');
});

// Server setup
app.listen(8080, () => {
	console.log('server listening on port 8080');
});
