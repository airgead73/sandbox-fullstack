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
const handleUpload = require('./../middleware/handleImages/handleUpload');
const uploadCloud = require('./../middleware/handleImages/uploadCloud');
const handleData = require('./../middleware/handleImages/handleData');

// routes

photosRouter
  .route('/')
  .get(handleQuery(Photo), read_all)
  .post(create);

module.exports = {
  photosRouter,
};