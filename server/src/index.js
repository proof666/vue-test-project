const express = require('express');
const config = require('./config/config');

const app = express();

const server = app.listen(process.env.PORT || config.port,
  () => console.debug(`Server start on port ${config.port} ...`));

const io = require('socket.io')(server);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const socket = require('./io')(io);
const redis = require('./redis')(socket);
require('./routes')(app, redis);
