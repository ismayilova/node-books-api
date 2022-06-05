// const express = require('express');
// const bodyParser = require('body-parser');

import express from "express";
import bodyParser from "body-parser";

import routes from "./routes/books.js";
import dbRoutes from "./routes/common.js";
// const routes = require('./routes/books');


const app = express();
const PORT = 5000;

// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/books',routes);
app.use('/init',dbRoutes);

//to catch 404 error
app.use((req,res,next)=>{
    res.status(404)
    .sendFile(path.join(__dirname,'views','404.html'));

});
app.listen(PORT,()=>{console.log(`Server is runnign on port: http://localhost:${PORT}`)});

