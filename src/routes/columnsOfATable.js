const model = require('./../../models');

module.exports = {
  method: 'GET',
  path: '/columnsOfTable',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    const columns = await model.formElements.getAllColumnsByFormId(request.query.formId);
    return h.response(columns).code(200);
  },
};
