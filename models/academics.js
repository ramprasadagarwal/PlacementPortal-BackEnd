module.exports = (sequelize, DataTypes) => {
  const academics = sequelize.define('academics', {
    usn: DataTypes.STRING,
    xinstitute: DataTypes.STRING,
    xboard: DataTypes.STRING,
    xmarks: DataTypes.DECIMAL,
    xyear: DataTypes.INTEGER,
    xiiinstitute: DataTypes.STRING,
    xiiboard: DataTypes.STRING,
    xiimarks: DataTypes.DECIMAL,
    xiiyear: DataTypes.INTEGER,
    cetrank: DataTypes.INTEGER,
    cgpa1: DataTypes.DECIMAL,
    credit1: DataTypes.INTEGER,
    cgpa2: DataTypes.DECIMAL,
    credit2: DataTypes.INTEGER,
    cgpa3: DataTypes.DECIMAL,
    credit3: DataTypes.INTEGER,
    cpga4: DataTypes.DECIMAL,
    credit4: DataTypes.INTEGER,
    cgpa5: DataTypes.DECIMAL,
    credit5: DataTypes.INTEGER,
    cgpa6: DataTypes.DECIMAL,
    credit6: DataTypes.INTEGER,
    cgpa7: DataTypes.DECIMAL,
    credit7: DataTypes.INTEGER,
    cgpa8: DataTypes.DECIMAL,
    credit8: DataTypes.INTEGER,
    totalcredit: DataTypes.INTEGER,
    mutebacklog: DataTypes.INTEGER,
    clearbacklog: DataTypes.INTEGER,
    currentbacklog: DataTypes.INTEGER,
  }, {});
  academics.associate = function (models) {
    // associations can be defined here
  };
  return academics;
};
