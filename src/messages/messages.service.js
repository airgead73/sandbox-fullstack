/**
 * Service Methods
 */

const host = process.env.NODE_ENV === 'development' ? 'LOCAL' : 'HEROKU'

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
