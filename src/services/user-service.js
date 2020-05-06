const express     = require('express');
const router      = express.Router();
const httpStatus  = require('http-status');
const Models  = require('../models');

module.exports = {  
    async createUser(req, res){
   
    const newUser = req.body;
    Models.Users.create({
            created_by: newUser.created_by,
            first_name : newUser.first_name,
            last_name : newUser.last_name,
            email : newUser.email,
            role_id : newUser.role_type_id,
            status : newUser.status,
            forgotten_password_code : newUser.status,
        })
        .then(user => {
            res.json(user);
        });
    },

    // async testingCreatingUSer(req, res){
    //     sequelize.query("INSERT INTO `Users` (`user_id`,`created_by`,`first_name`,`last_name`,`email`,`forgotten_password_code`,`role_type_id`,`status`) VALUES (DEFAULT,1,2,3,4,5,6,7)").spread(function(results, metadata) {
    //     res.send({
    //         results : results,
    //         metadata : metadata
    //     })
    //   })
    // }
    
    async testingCreatingUSer(req, res){
        sequelize.query("INSERT INTO `Users` (`user_id`,`created_by`,`first_name`,`last_name`,`email`,`forgotten_password_code`,`role_id`,`status`) VALUES (DEFAULT,1,2,3,4,5,6,7)", { type: sequelize.QueryTypes.INSERT})
        .then(function(users) {
                res.send({user : users})
            })
    },

    async getAllTheUsers(req, res){ 
        Models.Users.findAll({
            include : [ {
                   model : Models.Roles,
                }],
        }).then(Users =>{
            res.send(Users);
        })
    }
}
