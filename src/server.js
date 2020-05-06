const express = require('express');
const app = express();
const http = require('http');
var fs = require("fs");
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, './.env') });

var env = process.env.ENVIRONMENT || 'developmemt';
const port = parseInt(process.env.PORT, 10) || 7000;
app.set('port', port);
console.log('Your Application is listening you at ' + port);
const server = http.createServer(app);
server.listen(port);