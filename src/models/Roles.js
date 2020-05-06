const Sequelize = require("sequelize");
 module.exports = (Sequelize , Datatypes ) => {
     var Roles = Sequelize.define('Roles',{
        role_id : {
            type: Datatypes.BIGINT,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true 
        },
        role_name : {
            type: Datatypes.STRING(300),
           },
           created : Datatypes.DATE,
           modified : Datatypes.DATE
     },{
         timestamps: false
     });
    Roles.associate = function (models){
        //1 Role can have multiple users
        //Roles.hasMany(models.Users);
        Roles.belongsTo(models.Users,{
            foreignKey : 'role_id'    
        });
    };
    return Roles;
 };
