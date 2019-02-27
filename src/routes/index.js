const ping = require('./ping');
const postFormStructure = require('./postFormStructure');

module.exports = () => [].concat(
  ping,
  postFormStructure,
);
