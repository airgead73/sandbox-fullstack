const isDev = process.env.NODE_ENV === 'development';
const audience = process.env.AUTH0_AUDIENCE;
const clientOriginUrl = isDev ? process.env.CLIENT_ORIGIN_URL_DEV : process.env.CLIENT_ORIGIN_URL;
const clientOrigins = [`${clientOriginUrl}`];
const cloudinaryName = process.env.CLOUDINARY_NAME;
const cloudinaryKey = process.env.CLOUDINARY_API_KEY;
const cloudinarySecret = process.env.CLOUDINARY_API_SECRET;
const cloudinaryUrl = process.env.CLOUDINARY_URL;
const dbUri = process.env.DB_URI;
const domain = process.env.AUTH0_DOMAIN;
const limit = process.env.RATE_LIMIT;
const serverPort = isDev ? process.env.SERVER_PORT : process.env.PORT;

if (!audience) {
  throw new Error(
    ".env is missing the definition of an AUTH0_AUDIENCE environmental variable",
  );
}

if (!clientOriginUrl) {
  throw new Error(
    ".env is missing the definition of an CLIENT_ORIGIN_URL_DEV or CLIENT_ORIGIN_URL environmental variable",
  );
}

if (!clientOrigins) {
  throw new Error(
    ".env is missing the definition of an CLIENT_ORIGIN_URL_DEV or CLIENT_ORIGIN_URL environmental variable",
  );
}

if (!cloudinaryName) {
  throw new Error(
    ".env is missing the definition of an CLOUDINARY_NAME or environmental variable",
  );
}

if (!cloudinaryKey) {
  throw new Error(
    ".env is missing the definition of an CLOUDINARY_API_KEY or environmental variable",
  );
}

if (!cloudinarySecret) {
  throw new Error(
    ".env is missing the definition of an CLOUDINARY_API_SECRET or environmental variable",
  );
}

if (!cloudinaryUrl) {
  throw new Error(
    ".env is missing the definition of an CLOUDINARY_URL or environmental variable",
  );
}

if (!dbUri) {
  throw new Error(
    ".env is missing the definition of an DB_URI or environmental variable",
  );
}

if (!domain) {
  throw new Error(
    ".env is missing the definition of an AUTH0_DOMAIN or environmental variable",
  );
}

if (!limit) {
  throw new Error(
    ".env is missing the definition of an RATE_LIMIT or environmental variable",
  );
}

if (!limit) {
  throw new Error(
    ".env is missing the definition of an SERVER_PORT or environmental variable",
  );
}

module.exports = {
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
};
