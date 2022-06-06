const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Welcome Node world!!**!</h1>`)
})

const port = process.env.port || 5000

app.listen(port, () => console.log('app is listing on port : ', port))