'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
          user_id : {
            type: Sequelize.BIGINT,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true 
        },
        created_by : {
            type: Sequelize.BIGINT,
        },
        modified_by : {
            type: Sequelize.BIGINT,
        },
        created : Sequelize.DATE,
        modified : Sequelize.DATE,
        first_name : {
            type: Sequelize.STRING(255),
        },
        last_name : {
            type: Sequelize.STRING(255),
        },
        email : {
            type: Sequelize.STRING(255),
        },
        forgotten_password_code : {
            type: Sequelize.STRING(255),
        },
        role_id : {
            type: Sequelize.BIGINT,
        },
        status : {
            type: Sequelize.TINYINT,
        }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
