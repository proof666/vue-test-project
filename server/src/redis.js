const redis = require('redis');

const client = process.env.NODE_ENV === 'production'
  ? redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST, {
    auth_pass: process.env.REDIS_SECRET,
    tls: { servername: process.env.REDIS_HOST },
  })
  : redis.createClient();

module.exports = io => ({
  addEventToList: (list, event, clientEmit) => {
    client.rpush(list, JSON.stringify(event), (err, reply) => {
      const message = err ? `Error: ${err}` : `Redis ${list} list contain ${reply} record(s).`;
      if (!err && clientEmit && typeof clientEmit === 'function') {
        clientEmit(event);
      }
      if (list === 'data' && event.type === 'addData') {
        io.emit('addData', event);
      }
      console.debug(`New event added to list ${list}`, event);
      console.debug(message);
    });
  },
  getData: list => new Promise((resolve) => {
    client.lrange(list, 0, -1, (err, reply) => {
      const success = !err;
      const message = err || 'success';
      const data = err ? [] : `[${reply}]`;
      resolve({
        success,
        message,
        data: JSON.parse(data),
      });
    });
  }),
});
