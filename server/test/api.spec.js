const request = require('supertest');
const redis = require('redis-mock');
const app = require('../src/app');

const mockRedis = {
  addEventToList: jest.fn(() => Promise.resolve()),
  getData: jest.fn(() => Promise.resolve()),
};
require('../src/routes')(app, mockRedis);


describe('Test the /logs path', () => {
  test('It should response the GET method', (done) => {
    request(app).get('/logs').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('Test the /logs path', () => {
  test('It should response the GET method', (done) => {
    request(app).get('/logs').expect('Content-Type', /json/).then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
