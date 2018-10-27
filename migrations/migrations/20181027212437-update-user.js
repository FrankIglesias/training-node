'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Users', 'isAdmin', Sequelize.BOOLEAN);
  }
};
