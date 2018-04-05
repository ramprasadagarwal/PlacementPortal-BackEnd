

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    usn: {
      type: Sequelize.STRING,
    },
    fullname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    sex: {
      type: Sequelize.STRING,
    },
    dob: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    year: {
      type: Sequelize.STRING,
    },
    branch: {
      type: Sequelize.STRING,
    },
    xmarks: {
      type: Sequelize.DECIMAL,
    },
    xiimarks: {
      type: Sequelize.DECIMAL,
    },
    cgpa: {
      type: Sequelize.DECIMAL,
    },
    historybacklog: {
      type: Sequelize.BOOLEAN,
    },
    currentbacklog: {
      type: Sequelize.BOOLEAN,
    },
    placed: {
      type: Sequelize.BOOLEAN,
    },
    password: {
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};
