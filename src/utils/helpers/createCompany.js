const Model = require('../../../models');

module.exports = details => Model.companies.findOne({
  where: {
    name: details.name,
  },
}).then((result) => {
  if (result) {
    return Model.companies.update(details, {
      where: {
        name: details.name,
      },
    }).then(() => 'Updated');
  }
  return Model.companies.create(details)
    .then(() => 'Inserted');
})
  .catch(err => err);
