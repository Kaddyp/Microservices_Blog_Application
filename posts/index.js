const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const PORT = 4000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/post', (req, res)=>{
    res.send(posts);
});

app.post('/post', (req, res)=>{
    const id = randomBytes(4).toString('hex');
    const {title } = req.body;
    posts[id] = {
        id, title
    }
    res.status(201).send(posts[id]);
});

app.listen(PORT, ()=>{
    console.log(`Listen on ${PORT}`);
});