/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const { clientOrigins, csp } = require("./config/env.dev");

const { apiRouter } = require('./controllers/routes');

/**
 * App Variables
 */

const app = express();

/**
 *  App Configuration
 */

app.use(helmet(csp));
app.use(cors({ origin: clientOrigins }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './views/build')));

app.use("/api", apiRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

module.exports = {
  app
};
