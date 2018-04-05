

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('academics', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    usn: {
      type: Sequelize.STRING,
    },
    xinstitute: {
      type: Sequelize.STRING,
    },
    xboard: {
      type: Sequelize.STRING,
    },
    xmarks: {
      type: Sequelize.DECIMAL,
    },
    xyear: {
      type: Sequelize.INTEGER,
    },
    xiiinstitute: {
      type: Sequelize.STRING,
    },
    xiiboard: {
      type: Sequelize.STRING,
    },
    xiimarks: {
      type: Sequelize.DECIMAL,
    },
    xiiyear: {
      type: Sequelize.INTEGER,
    },
    cgpa1: {
      type: Sequelize.DECIMAL,
    },
    cgpa2: {
      type: Sequelize.DECIMAL,
    },
    cgpa3: {
      type: Sequelize.DECIMAL,
    },
    cpga4: {
      type: Sequelize.DECIMAL,
    },
    cgpa5: {
      type: Sequelize.DECIMAL,
    },
    cgpa6: {
      type: Sequelize.DECIMAL,
    },
    cgpa7: {
      type: Sequelize.DECIMAL,
    },
    cgpa8: {
      type: Sequelize.DECIMAL,
    },
    totalcredit: {
      type: Sequelize.INTEGER,
    },
    mutebacklog: {
      type: Sequelize.INTEGER,
    },
    clearbacklog: {
      type: Sequelize.INTEGER,
    },
    currentbacklog: {
      type: Sequelize.INTEGER,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('academics'),
};
