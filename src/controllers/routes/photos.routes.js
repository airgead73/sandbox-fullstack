const { Router } = require('express');
const photosRouter = Router();
const Photo = require('./../../models/Photo');

// controller
const {
  create,
  read_all
} = require('../actions/photos.actions');

// middleware
const handleQuery = require('./../middleware/handleQuery');
const {
  projectInfo,
  uploadCloud,
  compileData
} = require('./../middleware/handleImages');

// routes

photosRouter
  .route('/')
  .get(handleQuery(Photo), read_all)
  .post(projectInfo, uploadCloud, compileData, create);

module.exports = {
  photosRouter,
};