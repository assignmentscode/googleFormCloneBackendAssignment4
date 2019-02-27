const model = require('./../../models');

module.exports = {
  method: 'POST',
  path: '/formStructure',
  handler: async (request, h) => {
    const { formName } = request.payload.data;
    const insertStatus = await model.forms.addNewFormName(formName);
    return h.response(insertStatus).code(200);
  },
};
// , columnNames
