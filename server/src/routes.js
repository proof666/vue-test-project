const bodyParser = require('body-parser');

module.exports = (app, redis) => {
  app.use(bodyParser.json());

  app.get('/logs', (req, res) => {
    redis.getData('log').then(log => res.send(log));
  });

  app.get('/data', (req, res) => {
    redis.getData('data').then(data => res.send(data));
  });

  app.post('/auth', (req, res) => {
    let response = 'success';
    res.status(201);
    if (!Object.prototype.hasOwnProperty.call(req.body, 'session')) {
      response = 'Error: payload does not have field "session".';
      res.status(400);
    } else if (!Object.prototype.hasOwnProperty.call(req.body, 'type')) {
      response = 'Error: payload does not have field "type".';
      res.status(400);
    } else if (!((req.body.type === 'login') || (req.body.type === 'logout'))) {
      response = 'Error: field "type" contains invalid value.';
      res.status(400);
    } else {
      const event = {
        type: req.body.type,
        datetime: new Date().toISOString(),
        eventData: {
          session: req.body.session,
        },
      };
      redis.addEventToList('log', event);
    }
    res.json({ message: response });
  });

  app.post('/addData', (req, res) => {
    let response = 'success';
    res.status(201);
    if (!Object.prototype.hasOwnProperty.call(req.body, 'name')) {
      response = 'Error: payload does not have field "name".';
      res.status(400);
    } else if (!Object.prototype.hasOwnProperty.call(req.body, 'text')) {
      response = 'Error: payload does not have field "text".';
      res.status(400);
    } else {
      const event = {
        type: 'addData',
        datetime: new Date().toISOString(),
        eventData: {
          name: req.body.name,
          text: req.body.text,
        },
      };
      redis.addEventToList('data', event);
      redis.addEventToList('log', event);
    }
    res.json({ message: response });
  });
};
