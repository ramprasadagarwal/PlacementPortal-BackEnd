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
    cetrank: {
      type: Sequelize.INTEGER,
    },
    cgpa1: {
      type: Sequelize.DECIMAL,
    },
    credit1: {
      type: Sequelize.INTEGER,
    },
    cgpa2: {
      type: Sequelize.DECIMAL,
    },
    credit2: {
      type: Sequelize.INTEGER,
    },
    cgpa3: {
      type: Sequelize.DECIMAL,
    },
    credit3: {
      type: Sequelize.INTEGER,
    },
    cpga4: {
      type: Sequelize.DECIMAL,
    },
    credit4: {
      type: Sequelize.INTEGER,
    },
    cgpa5: {
      type: Sequelize.DECIMAL,
    },
    credit5: {
      type: Sequelize.INTEGER,
    },
    cgpa6: {
      type: Sequelize.DECIMAL,
    },
    credit6: {
      type: Sequelize.INTEGER,
    },
    cgpa7: {
      type: Sequelize.DECIMAL,
    },
    credit7: {
      type: Sequelize.INTEGER,
    },
    cgpa8: {
      type: Sequelize.DECIMAL,
    },
    credit8: {
      type: Sequelize.INTEGER,
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
