module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'placed')
      .then(() => queryInterface.addColumn('users', 'placed', {
        type: Sequelize.INTEGER,
      }));
  },
  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'placed')
      .then(() => queryInterface.addColumn('users', 'placed', {
        type: Sequelize.BOOLEAN,
      }));
  },
};
