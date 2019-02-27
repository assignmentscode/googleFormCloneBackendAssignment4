const ping = require('./ping');
const postFormStructure = require('./postFormStructure');
const formNames = require('./formNames');
const columnsOfATable = require('./columnsOfATable');

module.exports = () => [].concat(
  ping,
  postFormStructure,
  formNames,
  columnsOfATable,
);
