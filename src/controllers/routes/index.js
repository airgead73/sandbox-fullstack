const { Router } = require('express');
const { projectsRouter } = require('./projects.routes');
const { photosRouter } = require('./photos.routes');

const apiRouter = Router();

apiRouter.use('/projects', projectsRouter);
apiRouter.use('/photos', photosRouter);

module.exports = {
  apiRouter
}