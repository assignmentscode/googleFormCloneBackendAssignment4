const { server } = require('./../../../src/server');

describe('Test for /formStructure POST route', () => {
  it('should reply with status code 200 and retuen a boolean value', async (done) => {
    const options = {
      url: '/formStructure',
      method: 'POST',
      payload: {
        formName: 'Code Academy 2019 FeedBack',
        columnNames: ['Date', 'Rating', 'Improvements'],
      },
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
    expect(typeof (response.result)).toEqual('boolean');
    done();
  });
  it('should return status code 404', async (done) => {
    const options = {
      url: '/formStructures',
      method: 'POST',
      payload: {
        formName: 'Code Academy 2019 FeedBack',
        columnNames: ['Date', 'Rating', 'Improvements'],
      },
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(404);
    done();
  });
});
