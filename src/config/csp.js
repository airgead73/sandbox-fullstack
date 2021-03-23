const csp = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"], 
      scriptSrc: ["'self'"],
      styleSrc: [
        "'self'", 
        'https://fonts.googleapis.com', 
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", 
        "https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css", 
        "'unsafe-inline'"
      ],
      imgSrc: [
        "'self'", 
        'data:', 
        "https://s.gravatar.com"
      ],
      connectSrc: [
        "'self'", 
        'https://dpmsandbox.us.auth0.com/oauth/token'
      ],
      fontSrc: [
        "'self'", 
        'https://fonts.gstatic.com'
      ],
      objectSrc: ["'self'"],
      mediaSrc: ["'self'"],
      frameSrc: [
        "'self'", 
        "dpmsandbox.us.auth0.com"
      ],
    }
  }
}

module.exports = csp;