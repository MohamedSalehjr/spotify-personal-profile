const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const data = {
        name: 'mo'
        }
        res.json(data);
})

const port = 8888;

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})