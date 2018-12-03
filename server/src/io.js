const redis = require('./redis')();

module.exports = (io) => {
  io.on('connect', (socket) => {
    function broadcastEmit(data) {
      socket.broadcast.emit(data.type, data);
    }

    const loginEvent = {
      type: 'login',
      datetime: new Date().toISOString(),
      eventData: {
        session: socket.id,
      },
    };

    redis.addEventToList('log', loginEvent, broadcastEmit);

    socket.on('disconnect', () => {
      const logoutEvent = {
        type: 'logout',
        datetime: new Date().toISOString(),
        eventData: {
          session: socket.id,
        },
      };

      redis.addEventToList('log', logoutEvent, broadcastEmit);
    });
  });

  return io;
};
