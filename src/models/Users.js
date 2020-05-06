const Sequelize = require("sequelize");
module.exports = (Sequelize , Datatypes )=> {
    var Users = Sequelize.define('Users',{
        user_id : {
            type: Datatypes.BIGINT,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true 
        },
        created_by : {
            type: Datatypes.BIGINT,
        },
        modified_by : {
            type: Datatypes.BIGINT,
        },
        created : Datatypes.DATE,
        modified : Datatypes.DATE,
        first_name : {
            type: Datatypes.STRING(255),
        },
        last_name : {
            type: Datatypes.STRING(255),
        },
        email : {
            type: Datatypes.STRING(255),
        },
        forgotten_password_code : {
            type: Datatypes.STRING(255),
        },
        role_id : {
            type: Datatypes.BIGINT,
        },
        status : {
            type: Datatypes.TINYINT,
        }
     },{
        timestamps: false
     });
     Users.associate = function (models){
        //1 Role can have multiple users
        Users.hasOne(models.Roles,{
            foreignKey : 'role_id',
        });
    };
    return Users;
}