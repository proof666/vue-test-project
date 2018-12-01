const express = require('express');
const config = require('./config/config');

const app = express();

const server = app.listen(process.env.PORT || config.port,
  () => console.log(`Server start on port ${config.port} ...`));

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log(socket.id);
});
