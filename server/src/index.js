const express = require('express');
const cors = require('cors');
const redis = require('./redis');
const config = require('./config/config');

const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.get('/logs', (req, res) => {
  redis.getEventLog().then(log => res.send(log));
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

  redis.addEventToLog(event);
});
