const Sequelize = require('sequelize');
var fs = require("fs");
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '../.env') });
var environment = process.env.ENVIRONMENT || 'developmemt';
var contents = fs.readFileSync("./config/config.json");
var jsonContent = JSON.parse(contents);
var db_config   = jsonContent.development;

const sequelize = new Sequelize(db_config.database,db_config.username,db_config.password,db_config);

module.exports = sequelize;
global.sequelize = sequelize;