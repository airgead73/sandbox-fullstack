const { cloudinary } = require('../../../config/env.dev');
const fs = require('fs');

const uploadCloud = async function(req, res, next) {

  const cloudFile = await cloudinary.uploader.upload('uploads/temp', {
    folder: 'projects/'
  });

  fs.unlinkSync('uploads/temp');

  res.cloudData = cloudFile;

  next();

}

module.exports = uploadCloud;