const model = require('./../../models');

let inputFormId;
const inputColumnName = 'firstName';
describe('insertColumn ()', async () => {
  beforeAll(async () => {
    inputFormId = await model.forms.findAll().then(result => result[0].dataValues.id);
    await model.formElements.truncate();
  });
  it('should insert only 1 column into formElements Table', async () => {
    await model.formElements.insertColumn(inputFormId, inputColumnName);
    expect(await model.formElements.count()).toEqual(1);
  });
  it('should insert a column Name into database', async () => {
    await model.formElements.findAll({ where: { columnName: inputColumnName } }).then((result) => {
      expect(result[0].dataValues.columnName).toEqual(inputColumnName);
    });
  });
  it('should not enter duplicate entry into database', async () => {
    await model.formElements.insertColumn(inputFormId, inputColumnName)
      .then(({ created }) => {
        expect(created).toEqual(false);
      });
  });
});

describe('getAllColumnsByFormId ()', async () => {
  afterAll(async () => {
    model.sequelize.close();
  });
  it('should return the list of all form Names stored in database', async () => {
    await model.formElements.getAllColumnsByFormId(inputFormId).then((result) => {
      expect(result[0].columnName).toEqual(inputColumnName);
      expect(result.length).toEqual(1);
    });
  });
});
