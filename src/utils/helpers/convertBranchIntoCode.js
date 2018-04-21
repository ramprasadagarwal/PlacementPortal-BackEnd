module.exports = (branch) => {
  switch (branch) {
    case 'COMPUTER SCIENCE AND ENGINEERING': return 'cse';
    case 'INFORMATION SCIENCE AND ENGINEERING': return 'ise';
    case 'MECHANICAL ENGINEERING': return 'me';
    case 'ELECTRONICS AND COMMUNICATIONS ENGINEERING': return 'ec';
    case 'ELECTRICAL AND ELECTRONICS ENGINEERING': return 'eee';
    case 'INDUSTRIAL AND PRODUCTION ENGINEERING': return 'ip';
    case 'CIVIL ENGINEERING': return 'cv';
    default: return null;
  }
};

