const redis = require('redis');

const client = redis.createClient();

module.exports = {
  addEventToLog: (event) => {
    client.rpush('log', JSON.stringify(event), (err, reply) => {
      const message = err ? `Error: ${err}` : `Redis Log list contain ${reply} record(s).`;
      console.debug(message);
    });
  },
};
