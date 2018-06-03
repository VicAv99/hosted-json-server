const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParser);

server.listen(port, () => console.log('JSON server is running on port', port));