const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');

//DB CONNECTION
require("./database/connection");   
//DB CONNECTION 

//const config = require('./config/config.json');// done
const routes = require('./routes/v1');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());
const router = express.Router();
//const server = require('./src/server');
app.use('/myApp/api/v1', routes);


// app.get('*', (req, res) => res.status(200).send({
//         message: 'My App Wokring',
// }));

module.exports = app;
