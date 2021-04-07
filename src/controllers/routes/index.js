const { Router } = require('express');
const { messagesRouter } = require('./messages.routes');
const { projectsRouter } = require('./projects.routes');
const { photosRouter } = require('./photos.routes');

const apiRouter = Router();

apiRouter.use('/messages', messagesRouter);
apiRouter.use('/projects', projectsRouter);
apiRouter.use('/photos', photosRouter);

module.exports = {
  apiRouter
}