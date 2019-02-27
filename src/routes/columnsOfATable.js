const model = require('./../../models');

module.exports = {
  method: 'GET',
  path: '/columnsOfTable',
  handler: async (request, h) => {
    const columns = await model.formElements.getAllColumnsByFormId(request.query.formId);
    return h.response(columns).code(200);
  },
};
