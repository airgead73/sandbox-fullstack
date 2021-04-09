const { createServer } = require('http');
const { app } = require('./src');
const { serverPort } = require('./src/config');
const server = createServer(app);

server.listen(serverPort, () => console.log(`*** Server listening on port ${serverPort} ***.`));