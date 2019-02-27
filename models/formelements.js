module.exports = (sequelize, DataTypes) => {
  const formElements = sequelize.define('formElements', {
    formId: DataTypes.INTEGER,
    columnName: DataTypes.STRING,
  }, {});
  formElements.getAllColumnsByFormId = inputFormId => formElements.findAll({
    where: {
      formId: inputFormId,
    },
  });
  formElements.insertColumn = (inputFormId, inputColumnName) => formElements.findOrCreate({
    where: {
      formId: inputFormId,
      columnName: inputColumnName,
    },
  }).spread((column, created) => ({ column, created }));
  return formElements;
};
