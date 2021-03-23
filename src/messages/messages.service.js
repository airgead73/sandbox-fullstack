/**
 * Service Methods
 */
const { isDev } = require('./../config/env.dev');

const host = isDev ? 'LOCAL' : 'HEROKU'

const getPublicMessage = () => {
  return {
    message: `${host}: The API doesn't require an access token to share this message.`,
  };
};

const getProtectedMessage = () => {
  return {
    message: `${host}: The API successfully validated your access token.`,
  };
};

module.exports = {
  getPublicMessage,
  getProtectedMessage,
};
