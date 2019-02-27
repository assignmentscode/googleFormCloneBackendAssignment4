const { server } = require('./../../../src/server');
const model = require('./../../../models');

let inputFormId;
describe('Test for /columnsOfTable GET route', () => {
  beforeAll(async () => {
    inputFormId = await model.forms.findAll().then(result => result[0].dataValues.id);
  });
  afterAll(async () => {
    model.sequelize.close();
  });
  it('should return the status code 200', async () => {
    const options = {
      url: `/columnsOfTable?formId=${inputFormId}`,
      method: 'GET',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
  it('should return status code 404', async () => {
    const options = {
      url: `/columnOfTable?formId=${inputFormId}`,
      method: 'GET',
    };
    const response = await server.inject(options);
    await expect(response.statusCode).toEqual(404);
  });
  it('should return array', async () => {
    const options = {
      url: `/columnsOfTable?formId=${inputFormId}`,
      method: 'GET',
    };
    const response = await server.inject(options);
    await expect(response.result).toBeDefined();
  });
});
