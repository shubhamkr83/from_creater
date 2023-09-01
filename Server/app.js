const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');

// const User = require('./model/userSchema');

app.use(express.json());


app.use(require('./router/auth'));


const port = process.env.PORT || 8000;


// Middelware 
const middleware = (req, res, next) => {
    console.log(`Hello my Middleware`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Hello world from theL server app.js`);
});

app.get('/about', middleware, (req, res) => {
    console.log(`Hello my About`);
    res.send(`Hello About world from the server`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello Contact world from the server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});


