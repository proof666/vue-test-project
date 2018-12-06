const request = require('supertest');
const redis = require('redis-mock');
const app = require('../src/app');

let mockRedis = {
  addEventToList: jest.fn(() => Promise.resolve()),
  getData: jest.fn(() => Promise.resolve()),
};

require('../src/routes')(app, mockRedis);

afterEach(() => {
  mockRedis.addEventToList.mockClear();
  mockRedis.getData.mockClear();
});

describe('Test the /logs path', () => {
  test('It should response the GET method with content type JSON', (done) => {
    request(app).get('/logs').expect('Content-Type', /json/).then((response) => {
      expect(response.statusCode).toBe(200);
      expect(mockRedis.getData).toHaveBeenCalledTimes(1);
      done();
    });
  });
});


describe('Test the /data path', () => {
  test('It should response the GET method with content type JSON', (done) => {
    request(app).get('/data').expect('Content-Type', /json/).then((response) => {
      expect(response.statusCode).toBe(200);
      expect(mockRedis.getData).toHaveBeenCalledTimes(1);
      done();
    });
  });
});


describe('Test the /addData path', () => {
  test('It should response with status 400 and messege field when "name" not present in request', (done) => {
    request(app).post('/addData')
      .send({
        text: 'text'
      })
      .expect('Content-Type', /json/).then((response) => {
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('message', 'Error: payload does not have field "name".');
        expect(mockRedis.addEventToList).toHaveBeenCalledTimes(0);
        done();
      });
  });

  test('It should response with status 400 and messege field when "text" not present in request', (done) => {
    request(app).post('/addData')
      .send({
        name: 'name'
      })
      .expect('Content-Type', /json/).then((response) => {
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('message', 'Error: payload does not have field "text".');
        expect(mockRedis.addEventToList).toHaveBeenCalledTimes(0);
        done();
      });
  });

  test('It should response with status 201 and {message: "success"}', (done) => {
    request(app).post('/addData')
      .send({
        name: 'name',
        text: 'text'
      })
      .expect('Content-Type', /json/).then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('message', 'success');
        expect(mockRedis.addEventToList).toHaveBeenCalledTimes(2); // twice, because we add two events in different redis lists
        done();
      });
  });
});
