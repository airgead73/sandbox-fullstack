const isDev = process.env.NODE_ENV === 'development';
const serverStem = isDev ? process.env.REACT_APP_SERVER_URL_DEV : process.env.REACT_APP_SERVER_URL;

export { 
  isDev,
  serverStem
}