const express     = require('express');
const router      = express.Router();
const httpStatus  = require('http-status');
const Models      = require('../models');

module.exports = {  
   
    async createRole(req, res){
        const newRole = req.body;
        Models.Roles.create({
            role_name : newRole.name,
            })
            .then(Roles => {
                res.json(Roles);
            });
        },
}


