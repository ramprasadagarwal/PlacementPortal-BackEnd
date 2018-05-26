

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('companyresponses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    companyid: {
      type: Sequelize.INTEGER,
    },
    studentusn: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('companyresponses'),
};
