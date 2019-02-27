const { server } = require('./../../../src/server');

describe('Test for /formNames GET route', () => {
  it('should return the status code 200', async () => {
    const options = {
      url: '/formNames',
      method: 'GET',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
  it('should return status code 404', async () => {
    const options = {
      url: '/formName',
      method: 'GET',
    };
    const response = await server.inject(options);
    await expect(response.statusCode).toEqual(404);
  });
  it('should return array', async () => {
    const options = {
      url: '/formNames',
      method: 'GET',
    };
    const response = await server.inject(options);
    await expect(response.result).toBeDefined();
  });
});
