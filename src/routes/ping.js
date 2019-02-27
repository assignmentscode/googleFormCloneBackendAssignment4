module.exports = {
  method: 'GET',
  path: '/ping',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: () => 'pong',
};
