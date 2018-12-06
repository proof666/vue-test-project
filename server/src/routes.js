const bodyParser = require('body-parser');

module.exports = (app, redis) => {
  app.use(bodyParser.json());

  app.get('/logs', (req, res) => {
    redis.getData('log').then(log => res.json(log));
  });

  app.get('/data', (req, res) => {
    redis.getData('data').then(data => res.json(data));
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
