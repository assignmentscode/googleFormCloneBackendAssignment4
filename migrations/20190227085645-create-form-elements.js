module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('formElements', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    formId: {
      type: Sequelize.INTEGER,
    },
    columnName: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('formElements'),
};
