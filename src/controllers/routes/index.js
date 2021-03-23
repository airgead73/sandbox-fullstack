const { Router } = require('express');
const { messagesRouter } = require('./messages.routes');

const apiRouter = Router();

apiRouter.use('/messages', messagesRouter);

module.exports = {
  apiRouter
}