const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('views'));

// API 1: Home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// API 2: Hello route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

// API 3: Time route
app.get('/api/time', (req, res) => {
    res.json({ time: new Date().toLocaleTimeString() });
});

// API 4: Date route
app.get('/api/date', (req, res) => {
    res.json({ date: new Date().toLocaleDateString() });
});

// API 5: Random number route
app.get('/api/random', (req, res) => {
    res.json({ number: Math.floor(Math.random() * 100) });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
