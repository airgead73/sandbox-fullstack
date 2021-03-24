/**
 * External Modules
 */

const cookieParser = require('cookie-parser');
const cors = require("cors");
const createError = require('http-errors');
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
const { 
  clientOrigins,
  connectDB, 
  csp, 
  isDev, 
  limit 
} = require("./config/env.dev");



/**
 * Initialize App 
 */
const app = express();
connectDB();

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
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  const errorLog = {
    error: true,
    status: err.status || null,
    code: err.code || null,
    name: err.name,
    message: err.message
  }

  const errorObject = {...errorLog}
  errorObject.details = err.stack

  console.log(errorObject);

  return res
    .status(err.status)
    .json(errorLog);
});

/**
 *  Export Module
*/
module.exports = {
  app
};
