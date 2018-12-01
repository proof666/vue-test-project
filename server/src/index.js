const express = require('express');
const redis = require('./redis');
const config = require('./config/config');

const app = express();

const server = app.listen(process.env.PORT || config.port,
  () => console.debug(`Server start on port ${config.port} ...`));

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  const event = {
    type: 'login',
    session: socket.id,
    datetime: new Date().toISOString(),
  };
  console.debug(event);

  redis.addEventToLog(event);
});
