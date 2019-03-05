const model = require('./../../models');

const formName = 'Code Academy FeedBack 2019';
describe('addNewFormName ()', () => {
  beforeEach(async () => {
    await model.forms.truncate();
  });
  it('should insert only 1 formName into database', async (done) => {
    await model.forms.addNewFormName(formName);
    expect(await model.forms.count()).toEqual(1);
    done();
  });
  it('should insert a formName into database', async (done) => {
    await model.forms.addNewFormName(formName);
    await model.forms.findAll({ where: { formName } }).then((result) => {
      expect(result[0].dataValues.formName).toEqual(formName);
      done();
    });
  });
  it('should not enter duplicate entry into database', async (done) => {
    await model.forms.addNewFormName(formName);
    await model.forms.addNewFormName(formName)
      .then(({ created }) => {
        expect(created).toEqual(false);
        done();
      });
  });
});
describe('getAllFormName ()', () => {
  beforeEach(async () => {
    await model.forms.truncate();
    await model.forms.addNewFormName(formName);
  });
  afterAll(async () => {
    model.sequelize.close();
  });
  it('should return the list of all form Names stored in database', async (done) => {
    await model.forms.getAllFormName().then((result) => {
      expect(result[0].formName).toEqual(formName);
      expect(result.length).toEqual(1);
      done();
    });
  });
});
