const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ message: 'Hi' });
})

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})