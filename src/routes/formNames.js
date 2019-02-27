const model = require('./../../models');

module.exports = {
  method: 'GET',
  path: '/formNames',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request, h) => {
    const formNames = await model.forms.getAllFormName();
    return h.response(formNames).code(200);
  },
};
