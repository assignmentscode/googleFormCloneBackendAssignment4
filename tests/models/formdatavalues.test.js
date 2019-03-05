const model = require('./../../models');

const formName = 'Code Academy FeedBack 2019';
const inputColumnName1 = 'firstName';
const inputColumnName2 = 'lastName';
const data = {
  firstName: 'Rachel',
  lastName: 'Green',
};
let inputFormId;
describe('FormDataValues Table: ', () => {
  beforeAll(async () => {
    await model.forms.truncate();
    await model.formElements.truncate();
    await model.formDataValues.truncate();
    await model.forms.addNewFormName(formName);
    inputFormId = await model.forms.findAll().then(result => result[0].dataValues.id);
    await model.formElements.insertColumn(inputFormId, inputColumnName1);
    await model.formElements.insertColumn(inputFormId, inputColumnName2);
  });
  afterAll(async () => {
    model.sequelize.close();
  });
  describe('insertFormData ()', () => {
    it('should insert only 1 row of data into database for 1 form', async () => {
      await model.formDataValues.insertFormData(inputFormId, data);
      expect(await model.formDataValues.count()).toEqual(1);
    });
    it('should insert a row of data into database', async () => {
      await model.formDataValues.findAll({ where: { formId: inputFormId } }).then((result) => {
        expect(result[0].dataValues.formData).toEqual(data);
      });
    });
  });
  describe('getFormDataByFormId ()', () => {
    it('should return the list of all rows stored in database given the form Id', async () => {
      await model.formDataValues.getFormDataByFormId(inputFormId).then((result) => {
        expect(result[0].dataValues.formData).toEqual(data);
        expect(result.length).toEqual(1);
      });
    });
  });
});
