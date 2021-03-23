const asyncHandler = require('./../middleware/handleAsync');
const { isDev } = require('./../../config/env.dev');
const host = isDev ? 'LOCAL' : 'HEROKU'

/**
 * @route   GET /api/messages/public
 * @desc    read public messages
 * @access  public
 */

 exports.read_public = asyncHandler(async function(req, res, next) {
   return res
    .status(200)
    .json({
      message: `${host}: The API doesn't require an access token to share this message. --refactored`
    });
});

/**
 * @route   GET /api/messages/protected
 * @desc    read protected messages
 * @access  private
 */

 exports.read_protected = asyncHandler(async function(req, res, next) {
  return res
  .status(200)
  .json({
    message: `${host}: The API successfully validated your access token. --refactored`
  });   
});