module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('companies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    cid: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    about: {
      type: Sequelize.STRING,
    },
    position: {
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.STRING,
    },
    ctc: {
      type: Sequelize.INTEGER,
    },
    jd: {
      type: Sequelize.STRING,
    },
    cse: {
      type: Sequelize.BOOLEAN,
    },
    ise: {
      type: Sequelize.BOOLEAN,
    },
    me: {
      type: Sequelize.BOOLEAN,
    },
    ec: {
      type: Sequelize.BOOLEAN,
    },
    eee: {
      type: Sequelize.BOOLEAN,
    },
    ip: {
      type: Sequelize.BOOLEAN,
    },
    cv: {
      type: Sequelize.BOOLEAN,
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
    history: {
      type: Sequelize.BOOLEAN,
    },
    test: {
      type: Sequelize.DATE,
    },
    interview: {
      type: Sequelize.DATE,
    },
    venue: {
      type: Sequelize.STRING,
    },
    deadline: {
      type: Sequelize.DATE,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('companies'),
};
