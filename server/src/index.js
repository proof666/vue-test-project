const express = require('express');
const bodyParser = require('body-parser');
const redis = require('./redis');
const config = require('./config/config');

const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.get('/logs', (req, res) => {
  redis.getData('log').then(log => res.send(log));
});

app.get('/data', (req, res) => {
  redis.getData('data').then(data => res.send(data));
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

const server = app.listen(process.env.PORT || config.port,
  () => console.debug(`Server start on port ${config.port} ...`));

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  const event = {
    type: 'login',
    datetime: new Date().toISOString(),
    eventData: {
      session: socket.id,
    },
  };
  console.debug(event);

  redis.addEventToList('Log', event);
});
