const firebase = require('firebase-admin');

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
  const user = firebase.auth().currentUser;

  if (user) {
    // User is authenticated, allow access to the route
    return next();
  } else {
    // User is not authenticated, return an error
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

module.exports = isAuthenticated;