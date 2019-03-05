const { server } = require('./../../../src/server');

describe('Route /ping', () => {
  const options = {
    method: 'GET',
    url: '/ping',
  };
  it('should return status Code 200', async () => {
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
  it('should return "pong" as a response', async () => {
    const response = await server.inject(options);
    expect(response.result).toEqual('pong');
  });
});
describe('Route /Ping', () => {
  const options = {
    method: 'GET',
    url: '/Ping',
  };
  it('should return status Code 404', async () => {
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(404);
  });
  it('should return "Not Found" as a response', async () => {
    const response = await server.inject(options);
    expect(response.result.message).toEqual('Not Found');
  });
});
