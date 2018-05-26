module.exports = (sequelize, DataTypes) => {
  const companyResponses = sequelize.define('companyresponses', {
    companyid: DataTypes.INTEGER,
    studentusn: DataTypes.STRING,
  }, {});
  companyResponses.associate = function (models) {
    // associations can be defined here
  };
  return companyResponses;
};
