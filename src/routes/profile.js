const getJWTPayload = require('../utils/helpers/getJWTPayload');
const calculateCGPA = require('../utils/helpers/calculateCGPA');
const Models = require('../../models');

module.exports = [{
  method: 'POST',
  path: '/profile',
  handler: (req, res) => {
    const userData = req.payload;
    const usn = getJWTPayload(req);
    const academicDetails = {
      usn,
      xinstitute: userData.xinstitute,
      xboard: userData.xboard,
      xmarks: userData.xmarks,
      xyear: userData.xyear,
      xiiinstitute: userData.xiiinstitute,
      xiiboard: userData.xiiboard,
      xiimarks: userData.xiimarks,
      xiiyear: userData.xiiyear,
      cetrank: userData.cetrank,
      cgpa1: userData.cgpa1,
      credit1: userData.credit1,
      cgpa2: userData.cgpa2,
      credit2: userData.credit2,
      cgpa3: userData.cgpa3,
      credit3: userData.credit3,
      cpga4: userData.cgpa4,
      credit4: userData.credit4,
      cgpa5: userData.cgpa5,
      credit5: userData.credit5,
      cgpa6: userData.cgpa6,
      credit6: userData.credit6,
      cgpa7: userData.cgpa7,
      credit7: userData.credit7,
      cgpa8: userData.cgpa8,
      credit8: userData.credit8,
      totalcredit: userData.totalcredit,
      mutebacklog: userData.mutebacklog,
      clearbacklog: userData.clearbacklog,
      currentbacklog: userData.currentbacklog,
    };
    const profileDetails = {
      usn,
      fullname: userData.fullname,
      dob: userData.dob,
      sex: userData.sex,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
      branch: userData.branch,
      xstd: userData.xmarks,
      xiistd: userData.xiimarks,
      historybacklog: userData.historybacklog,
      currentbacklog: userData.currentbacklog,
      placed: false,
      cgpa: calculateCGPA(academicDetails),
    };
    Models.users.update({
      profileDetails,
      where: {
        usn,
      },
    })
      .then(() => Models.academics.create(academicDetails))
      .then(console.log);
  },
}];

