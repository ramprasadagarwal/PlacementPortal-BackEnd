module.exports = (sequelize, DataTypes) => {
  const companies = sequelize.define('companies', {
    cid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    about: DataTypes.STRING,
    position: DataTypes.STRING,
    location: DataTypes.STRING,
    ctc: DataTypes.INTEGER,
    jd: DataTypes.STRING,
    cse: DataTypes.BOOLEAN,
    ise: DataTypes.BOOLEAN,
    me: DataTypes.BOOLEAN,
    ec: DataTypes.BOOLEAN,
    eee: DataTypes.BOOLEAN,
    ip: DataTypes.BOOLEAN,
    cv: DataTypes.BOOLEAN,
    xmarks: DataTypes.DECIMAL,
    xiimarks: DataTypes.DECIMAL,
    cgpa: DataTypes.DECIMAL,
    history: DataTypes.BOOLEAN,
    test: DataTypes.DATE,
    interview: DataTypes.DATE,
    venue: DataTypes.STRING,
  }, {});
  companies.associate = function (models) {
    // associations can be defined here
  };
  return companies;
};
