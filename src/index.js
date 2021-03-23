/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const { clientOrigins, serverPort } = require("./config/env.dev");

const { apiRouter } = require('./controllers/routes');

/**
 * App Variables
 */

const app = express();

/**
 *  App Configuration
 */

 app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"], 
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", 'https://fonts.googleapis.com', "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', "https://s.gravatar.com"],
        connectSrc: ["'self'", 'https://dpmsandbox.us.auth0.com/oauth/token'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        objectSrc: ["'self'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'self'", "dpmsandbox.us.auth0.com"],
      },
    }
  })
);
app.use(cors({ origin: clientOrigins }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './views/build')));

app.use("/api", apiRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 * Server Activation
 */

app.listen(serverPort, () =>
  console.log(`API Server listening on port ${serverPort}`)
);
