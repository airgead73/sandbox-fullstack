const { Router } = require('express');
const { messagesRouter } = require('./messages.routes');
const { projectsRouter } = require('./projects.routes');

const apiRouter = Router();

apiRouter.use('/messages', messagesRouter);
apiRouter.use('/projects', projectsRouter);

module.exports = {
  apiRouter
}