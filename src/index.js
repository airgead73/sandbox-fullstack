/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const { clientOrigins } = require("./config/env.dev");

const { messagesRouter } = require("./messages/messages.router");

/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();

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
        imgSrc: ["'self'", 'data:'],
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
app.use(express.static(path.join(__dirname, './client/build')));

app.use("/api", apiRouter);

apiRouter.use("/messages", messagesRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 * Server Activation
 */

const PORT = process.env.PORT || 6060

app.listen(PORT, () =>
  console.log(`API Server listening on port ${PORT}`)
);
