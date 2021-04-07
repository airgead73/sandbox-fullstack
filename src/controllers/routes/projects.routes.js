const { Router } = require('express');
const projectsRouter = Router();

// models
const Project = require('./../../models/Project');

// actions
const {
  create,
  read,
  read_one,
  update,
  delete_one,
  delete_all
} = require('./../actions/projects.actions');

// middleware
const { checkJwt } = require('./../middleware/handleAuthentication');
const handleQuery = require('./../middleware/handleQuery');

//projectsRouter.use(checkJwt);

// router
projectsRouter
  .route('/')
  .get(handleQuery(Project), read)
  .post(create)
  .delete(delete_all);

projectsRouter
  .route('/:projectID')
  .get(read_one)
  .put(update)
  .delete(delete_one);

module.exports = {
  projectsRouter,
}