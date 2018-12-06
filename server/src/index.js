
const app = require('./app');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const server = app.listen(process.env.PORT || 8081,
  () => console.debug(`Server start on port ${process.env.PORT || 8081} ...`));


const io = require('socket.io')(server);
const socket = require('./io')(io);
const redis = require('./redis')(socket);
require('./routes')(app, redis);
