'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable("roles",{
    role_id : {
        type: Sequelize.BIGINT,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true 
      },
      role_name : {
       type: Sequelize.STRING(300),
      },
      created  : Sequelize.DATE,
      modified : Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("roles");
  }
};
