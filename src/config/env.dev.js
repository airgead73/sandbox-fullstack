const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;
const isDev = process.env.NODE_ENV === 'development';
const serverPort = isDev ? process.env.SERVER_PORT : process.env.PORT;
const clientOriginUrl = isDev? process.env.CLIENT_ORIGIN_URL_DEV : process.env.CLIENT_ORIGIN_URL;
const cloudinaryName = process.env.CLOUDINARY_NAME;
const cloudinaryKey = process.env.CLOUDINARY_API_KEY;
const cloudinarySecret = process.env.CLOUDINARY_API_SECRET;
const cloudinaryUrl = process.env.CLOUDINARY_URL;
const connectDB = require('./db');
const csp = require('./csp');

const limit = process.env.RATE_LIMIT;

if (!audience) {
  throw new Error(
    ".env is missing the definition of an AUTH0_AUDIENCE environmental variable",
  );
}

if (!domain) {
  throw new Error(
    ".env is missing the definition of an AUTH0_DOMAIN environmental variable",
  );
}

if (!serverPort) {
  throw new Error(
    ".env is missing the definition of a API_PORT environmental variable",
  );
}

if (!clientOriginUrl) {
  throw new Error(
    ".env is missing the definition of a APP_ORIGIN environmental variable",
  );
}

const clientOrigins = [`${clientOriginUrl}`];

module.exports = {
  audience,
  clientOrigins,
  clientOriginUrl,
  cloudinaryName,
  cloudinarySecret,
  cloudinaryUrl,
  cloudinaryKey,
  connectDB,
  csp,
  domain,  
  isDev,
  limit,
  serverPort  
};
