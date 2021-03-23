const { Router } = require('express');
const messagesRouter = Router();

// actions
const {
  read_public,
  read_protected
} = require('./../actions/messages.actions');

// middleware
const { checkJwt } = require('./../middleware/handleAuthentication');

// router
messagesRouter
  .route('/public')
  .get(read_public);

messagesRouter
  .route('/protected')
  .get(checkJwt, read_protected);

module.exports = {
  messagesRouter,
}