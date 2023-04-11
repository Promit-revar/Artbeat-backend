// create simple express server
const express = require('express');
const db = require('./database');
const feedback = require('./models/feedbackSchema');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.post('/submit', async (req, res) => {
    const result = await feedback.create(req.body);
    res.send(result);

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});