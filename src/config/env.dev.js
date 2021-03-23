const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;
const isDev = process.env.NODE_ENV === 'development';
const serverPort = isDev ? process.env.SERVER_PORT : process.env.PORT;
const clientOriginUrl = isDev? process.env.CLIENT_ORIGIN_URL_DEV : process.env.CLIENT_ORIGIN_URL;
const csp = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"], 
      scriptSrc: ["'self'"],
      styleSrc: [
        "'self'", 
        'https://fonts.googleapis.com', 
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", 
        "https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css", 
        "'unsafe-inline'"
      ],
      imgSrc: [
        "'self'", 
        'data:', 
        "https://s.gravatar.com"
      ],
      connectSrc: [
        "'self'", 
        'https://dpmsandbox.us.auth0.com/oauth/token'
      ],
      fontSrc: [
        "'self'", 
        'https://fonts.gstatic.com'
      ],
      objectSrc: ["'self'"],
      mediaSrc: ["'self'"],
      frameSrc: [
        "'self'", 
        "dpmsandbox.us.auth0.com"
      ],
    },
  }
}

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
  csp,
  domain,
  clientOriginUrl,
  isDev,
  serverPort,
  clientOrigins,
};
