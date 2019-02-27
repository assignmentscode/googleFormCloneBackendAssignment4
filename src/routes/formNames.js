const model = require('./../../models');

module.exports = {
  method: 'GET',
  path: '/formNames',
  handler: async (request, h) => {
    const formNames = await model.forms.getAllFormName();
    return h.response(formNames).code(200);
  },
};
