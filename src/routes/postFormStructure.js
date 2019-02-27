const model = require('./../../models');

module.exports = {
  method: 'POST',
  path: '/formStructure',
  handler: async (request, h) => {
    const { formName, columnNames } = request.payload.data;
    const insertStatusFormName = await model.forms.addNewFormName(formName);
    const formId = insertStatusFormName.user.id;
    columnNames.map(columnName => model.formElements.insertColumn(formId, columnName));
    return h.response(insertStatusFormName.created).code(200);
  },
};
