const redis = require('redis');

const client = redis.createClient();

module.exports = {
  addEventToList: (list, event) => {
    client.rpush(list, JSON.stringify(event), (err, reply) => {
      const message = err ? `Error: ${err}` : `Redis ${list} list contain ${reply} record(s).`;
      console.debug(message);
    });
  },
  getEventLog: () => new Promise((resolve) => {
    client.lrange('log', 0, -1, (err, reply) => {
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
};
