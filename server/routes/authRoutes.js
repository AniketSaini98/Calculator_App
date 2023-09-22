const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/authMiddleware');
const firebase = require('firebase-admin');

// Initialize Firebase Admin SDK with your Firebase configuration
const serviceAccount = require('./config/calculator-app-b6340-firebase-adminsdk-8hyz9-a4766dd73f.json'); // Replace with your service account file path
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://calculator-app-b6340-default-rtdb.firebaseio.com/', // Replace with your Firebase Realtime Database URL
});

// Firebase Authentication
const auth = firebase.auth();

// Protect a route using the 'isAuthenticated' middleware
router.get('/protected-route', isAuthenticated, (req, res) => {
  // This route is protected and can only be accessed by authenticated users
  res.json({ message: 'This is a protected route.' });
});

// User registration
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await auth.createUser({
      email,
      password,
    });

    // User registration successful
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Unable to register user' });
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await auth.signInWithEmailAndPassword(email, password);

    // User login successful
    res.json({ message: 'User logged in successfully', user });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// User logout
router.get('/logout', (req, res) => {
  try {
    auth.signOut();

    // User logout successful
    res.json({ message: 'User logged out successfully' });
  } catch (error) {
    console.error('Error logging out user:', error);
    res.status(500).json({ error: 'Unable to log out user' });
  }
});

module.exports = router;