const model = require('./../../models');

let inputFormId;
const formName = 'Code Academy FeedBack 2019';
const inputColumnName1 = 'firstName';
const inputColumnName2 = 'lastName';
describe('insertColumn ()', async () => {
  beforeAll(async () => {
    await model.forms.truncate();
    await model.forms.addNewFormName(formName);
    inputFormId = await model.forms.findAll().then(result => result[0].dataValues.id);
  });
  beforeEach(async () => {
    await model.formElements.truncate();
    await model.formElements.insertColumn(inputFormId, inputColumnName1);
    await model.formElements.insertColumn(inputFormId, inputColumnName2);
  });
  it('should insert 2 column into formElements Table', async () => {
    expect(await model.formElements.count()).toEqual(2);
  });
  it('should insert a column Name into database', async () => {
    await model.formElements.findAll({ where: { formId: inputFormId } }).then((result) => {
      const outputColumns = [result[0].dataValues.columnName, result[1].dataValues.columnName];
      expect(outputColumns).toEqual([inputColumnName1, inputColumnName2]);
    });
  });
  it('should not enter duplicate entry into database', async () => {
    await model.formElements.insertColumn(inputFormId, inputColumnName1)
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
      expect(result[0].columnName).toEqual(inputColumnName1);
      expect(result[1].columnName).toEqual(inputColumnName2);
      expect(result.length).toEqual(2);
    });
  });
});
