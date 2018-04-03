const Hapi = require('hapi');
const routes = require('./src/routes');

const Server = new Hapi.Server();

Server.connection({
  port: 8080,
  host: 'localhost',
});

Server.route(routes);

if (!module.parent) {
  Server.start((err) => {
    if (err) throw err;
    console.log('Server started at port number 8080');
  });
}

module.exports = Server;
