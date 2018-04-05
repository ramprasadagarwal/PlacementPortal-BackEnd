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
    cgpa2: DataTypes.DECIMAL,
    cgpa3: DataTypes.DECIMAL,
    cpga4: DataTypes.DECIMAL,
    cgpa5: DataTypes.DECIMAL,
    cgpa6: DataTypes.DECIMAL,
    cgpa7: DataTypes.DECIMAL,
    cgpa8: DataTypes.DECIMAL,
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
