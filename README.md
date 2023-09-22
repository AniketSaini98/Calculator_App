# React Calculator App with Firebase Authentication

This is a simple web-based calculator application built with React. It allows users to perform basic arithmetic calculations and stores a history of their calculations. The application also includes user authentication using Firebase Authentication.

## Features

- Perform basic arithmetic operations (addition, subtraction, multiplication, division).
- Keeps a history of calculations.
- User authentication using Firebase Authentication.
- User-friendly and responsive UI design.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Firebase: A mobile and web application development platform.
- Firebase Authentication: For user authentication and management.
- math.js: A JavaScript library for handling mathematical calculations.
- FontAwesome: For adding icons to the UI.

## Getting Started

To run this application on your local machine, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/react-calculator-app.git

2. Navigate to the project directory:

    ```bash
    cd react-calculator-app

3. Install the project dependencies:
   
    ```bash
    npm install

4. Technologies Used

- Visit the Firebase Console.
- Create a new project.
- In the Firebase project settings, under "General," you'll find your project's Firebase configuration object. Copy this configuration object.
- Create a file named .env.local in the project root directory and add your Firebase configuration as follows:

  ```bash
  REACT_APP_FIREBASE_API_KEY=your-api-key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
  REACT_APP_FIREBASE_PROJECT_ID=your-project-id
  REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
  REACT_APP_FIREBASE_APP_ID=your-app-id

5. Run the application:

   ```bash
   npm start

6. Open your web browser and go to [http://localhost:3000] to access the application.

## Usage
- Users can register and log in to their accounts using the provided authentication form.
- Once logged in, they can use the calculator to perform calculations.
- Calculation history is displayed on the right side of the calculator.
- Users can log out by clicking the "Logout" button at the top right corner.

## License
This project is licensed under the MIT License - see the [LICENSE] file for details.

## Acknowledgments
The project was created as a learning exercise and may be extended with additional features and improvements.

  ```bash
  You can save this content into a file named `README.md` in the root directory of your project.
