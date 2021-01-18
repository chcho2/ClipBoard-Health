import { createMocks } from 'node-mocks-http';
import jobList from '../pages/api/jobs';
import jobs from '../data/jobs.json';

describe('jobList', () => {
  it('if there is searchword, should send 200 status code and json data', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      header: {searchword: 'mocking jobList request'}
    });
    await jobList(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._isJSON()).toBe(true);
   
  });
  
  it('if there is NO searchword, should send 200 status code and jobs data in json', async () => {
    const { req, res } = createMocks({
      method: 'GET',    
    });
    await jobList(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData().jobs).toEqual(jobs);
  });
});