<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# User Management App
A simple React-based application to manage users, allowing users to be added, edited, and deleted. The application uses mock data from the JSONPlaceholder API and features a clean and user-friendly interface.
# Features
View a list of users fetched from a mock API.
Add a new user using a dynamic form.
Edit existing user details in the same form.
Delete users from the list.
Display error messages for failed operations.
Lightweight and responsive design using Bootstrap.
# Components Overview

# UserList:
Displays the list of users in a table format.
Includes "Add User" and "Edit" buttons to open the UserForm.
Supports user deletion via a "Delete" button.
Handles conditional rendering of the UserForm component.

# UserForm:
A reusable form for both adding new users and editing existing ones.
Fields include Full Name, Email, and Department.
Pre-fills fields if an existing user is being edited.
Handles validation and form submission.

# api.js:
Centralizes API calls to interact with JSONPlaceholder.
Includes:
getUsers: Fetch the list of users.
deleteUser: Simulate deleting a user.


# Challenges Faced
Conditional Form Rendering:
=> Managing both "Add User" and "Edit User" functionalities in the same form required careful handling of state.
   Solution: Used the currentUser prop to differentiate between add and edit operations.
   Mock API Limitations:  

=> The JSONPlaceholder API does not persist data, making operations like adding and editing users non-persistent.
   Solution: Simulated the operations locally by updating the state after each action.

Error Handling:
Ensuring meaningful error messages for API failures while maintaining a smooth user experience.
Solution: Added try-catch blocks and an error state to display alerts when needed.
Potential Improvements

Enhanced Validation:
Add more robust validation for form fields (e.g., validating email format, preventing duplicate users).
>>>>>>> 926656088d5a3b7ce19951252cbe6c45786183f2
