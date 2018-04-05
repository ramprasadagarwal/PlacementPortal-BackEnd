const calculateCGPA = details => ((
  (details.cpga1 * details.credit1) +
    (details.cpga2 * details.credit2) +
    (details.cpga3 * details.credit3) +
    (details.cpga4 * details.credit4) +
    (details.cpga5 * details.credit5) +
    (details.cpga6 * details.credit6) +
    (details.cpga7 * details.credit7) +
    (details.cpga8 * details.credit8)) /
    (details.cgpa1 +
      details.cgpa2 +
      details.cgpa3 +
      details.cgpa4 +
      details.cgpa5 +
      details.cgpa6 +
      details.cgpa7 +
      details.cgpa8
    ));

module.exports = calculateCGPA;
