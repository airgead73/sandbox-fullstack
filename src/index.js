/**
 * External Modules
 */

const cookieParser = require('cookie-parser');
const cors = require("cors");
const createErrors = require('http-errors');
const express = require("express");
const helmet = require("helmet");
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const path = require("path");
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');

/**
 * Internal Modules
 */
const { apiRouter } = require('./controllers/routes');
const { clientOrigins, csp, isDev, limit } = require("./config/env.dev");



/**
 * Initialize App 
 */
const app = express();

/**
 * App security
 */

app.use(helmet(csp));
app.use(cors({ origin: clientOrigins }));
app.use(mongoSanitize());
const limiter = rateLimit({
   windowMs: 10 * 60 * 10,
   max: limit
 });
app.use(limiter);

/**
 *  App Middleware
*/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './views/build')));
app.use(cookieParser());

/**
 *  App Dev Middleware
*/

if(isDev) {
  const logger = require('morgan');
  app.use(logger('dev'));
}

/**
 *  App Routes
*/
app.use("/api", apiRouter);

/**
 *  Handle Errors
*/

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 *  Export Module
*/
module.exports = {
  app
};
