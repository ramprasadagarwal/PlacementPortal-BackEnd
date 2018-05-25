const calculateCGPA = (details) => {
  console.log('hey', Number(details.cgpa1));
  return ((
    (Number(details.cgpa1) * Number(details.credit1)) +
    (Number(details.cgpa2) * Number(details.credit2)) +
    (Number(details.cgpa3) * Number(details.credit3)) +
    (Number(details.cgpa4) * Number(details.credit4)) +
    (Number(details.cgpa5) * Number(details.credit5)) +
    (Number(details.cgpa6) * Number(details.credit6)) +
    (Number(details.cgpa7) * Number(details.credit7)) +
    (Number(details.cgpa8) * Number(details.credit8))) /
    (Number(details.credit1) +
      Number(details.credit2) +
      Number(details.credit3) +
      Number(details.credit4) +
      Number(details.credit5) +
      Number(details.credit6) +
      Number(details.credit7) +
      Number(details.credit8)
    ));
};

module.exports = calculateCGPA;
