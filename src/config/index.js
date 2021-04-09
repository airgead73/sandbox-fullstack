// constants
const {
  audience,
  clientOrigins,
  clientOriginUrl,
  cloudinaryName, 
  cloudinarySecret,
  cloudinaryUrl,
  cloudinaryKey,
  dbUri,
  domain,  
  isDev,
  limit,
  serverPort   
} = require('./constants');

const {
  csp
} = require('./csp')

// configurations

// database
const {
  connectDB
} = require('./db');

// cloudinary
const {
  cloudinary
} = require('./cloudinary');

module.exports = {
  audience,
  clientOrigins,
  clientOriginUrl,
  cloudinary,
  cloudinaryName, 
  cloudinarySecret,
  cloudinaryUrl,
  cloudinaryKey,
  connectDB,
  csp,
  dbUri,
  domain,  
  isDev,
  limit,
  serverPort   
}