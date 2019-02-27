module.exports = (sequelize, DataTypes) => {
  const formDataValues = sequelize.define('formDataValues', {
    formId: DataTypes.INTEGER,
    formData: DataTypes.JSON,
  }, {});

  formDataValues.getFormDataByFormId = inputFormId => formDataValues.findAll({
    where: {
      formId: inputFormId,
    },
  });

  formDataValues.insertFormData = (inputFormId, inputFormData) => formDataValues.findOrCreate({
    where: {
      formId: inputFormId,
      formData: inputFormData,
    },
  }).spread((formData, created) => ({ formData, created }));
  return formDataValues;
};
