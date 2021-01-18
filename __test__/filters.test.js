import { createMocks } from 'node-mocks-http';
import sendFiltersFile from '../pages/api/filters';
import filters from '../data/filters.json';

describe('sendFiltersFile', () => {
  it('should send 200 status code and json data', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });
    await sendFiltersFile(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._isJSON()).toBe(true);
  });
  
  
});
