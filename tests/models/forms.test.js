const model = require('./../../models');

const formName = 'Code Academy FeedBack 2019';
describe('addNewFormName ()', () => {
  beforeAll(async () => {
    await model.forms.truncate();
  });
  it('should insert only 1 formName into database', async () => {
    await model.forms.addNewFormName(formName);
    expect(await model.forms.count()).toEqual(1);
  });
  it('should insert a formName into database', async () => {
    await model.forms.findAll({ where: { formName } }).then((result) => {
      // console.log(result[0].dataValues.id);
      expect(result[0].dataValues.formName).toEqual(formName);
    });
  });
  it('should not enter duplicate entry into database', async () => {
    await model.forms.addNewFormName(formName)
      .then(({ created }) => {
        expect(created).toEqual(false);
      });
  });
});
describe('getAllFormName ()', () => {
  afterAll(async () => {
    model.sequelize.close();
  });
  it('should return the list of all form Names stored in database', async () => {
    await model.forms.getAllFormName().then((result) => {
      expect(result[0].formName).toEqual(formName);
      expect(result.length).toEqual(1);
    });
  });
});
