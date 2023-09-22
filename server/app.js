const express = require('express');
const mongoose = require('mongoose');
const calculatorRoutes = require('./routes/calculatorRoutes');
const firebase = require('firebase-admin');
require('dotenv').config(); // Load environment variables from .env file

// Connect to MongoDB using the URI from environment variables
const mongodbUri = process.env.MONGODB_URI; // Get MongoDB URI from environment variables

mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = express();

// Initialize Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the calculator routes
app.use('/api/calculator', calculatorRoutes);

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
  const user = firebase.auth().currentUser;

  if (user) {
    // User is authenticated, allow access to the route
    return next();
  } else {
    // User is not authenticated, redirect to login page or return an error
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

// Define the router object here
const router = express.Router();

// Protect a route using the 'isAuthenticated' middleware
router.get('/protected-route', isAuthenticated, (req, res) => {
  // This route is protected and can only be accessed by authenticated users
  res.json({ message: 'This is a protected route.' });
});

// Use the router for routes that need protection
app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
