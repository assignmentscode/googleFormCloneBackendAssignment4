module.exports = (sequelize, DataTypes) => {
  const forms = sequelize.define('forms', {
    formName: DataTypes.STRING,
  }, {});
  forms.getAllFormName = () => forms.findAll();

  forms.addNewFormName = inputFormName => forms.findOrCreate({
    where: { formName: inputFormName },
  }).spread((user, created) => ({ user, created }));
  return forms;
};
