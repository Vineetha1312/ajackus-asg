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
