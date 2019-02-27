const model = require('./../../models');

module.exports = {
  method: 'POST',
  path: '/formStructure',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    const { formName, columnNames } = request.payload;
    const insertStatusFormName = await model.forms.addNewFormName(formName);
    const formId = insertStatusFormName.user.id;
    columnNames.map(columnName => model.formElements.insertColumn(formId, columnName));
    return h.response(insertStatusFormName.created).code(200);
  },
};
