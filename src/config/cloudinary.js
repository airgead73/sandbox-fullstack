const cloudinary = require('cloudinary').v2;
const { cloudinaryKey, cloudinarySecret, cloudinaryName } = require('./constants');

cloudinary.config({
  cloud_name: cloudinaryName,
  api_key: cloudinaryKey,
  api_secret: cloudinarySecret
});

module.exports = { cloudinary };