<!-- @format -->

# CRUD Web App: List of Users

This is a web application project that allows you to create, list, and delete users. The application uses a modal form to enter user data and displays a list of created users on the main page.

## Features

- **Create Users:** Users can be created by entering their name, surname, and email in a modal form.
- **List Users:** The main page displays a list of all created users.
- **Delete Users:** Each user in the list has a “Delete” button to remove the corresponding user.
- **User Count:** The page shows the total number of created users displayed in the list.

## Technologies Used

- **Express:** To handle server requests.
- **Bulma CSS:** For design and styling of the application.
- **Vanilla JS:** For client-side logic.
- **Git:** For version control.
- **pnpm:** To manage project dependencies.
- **fs (File System):** To handle user creation and storage in a JSON file that acts as a database.

## Challenges Faced

1. Styling with Bulma: Applying Bulma classes correctly to center elements on the canvas was a challenge. It required adjusting classes and styles to achieve the desired layout.

2. User Deletion: There were issues with deleting users because IDs were not being parsed correctly. The ID types in the `filter` function did not match, causing errors when attempting to delete a user.

## Installation

1. Clone this repository: `git clone https://github.com/juaneugenio/classroom-list.git`

2. Navigate to the project directory: `cd classroom-list`

3. Install dependencies: `pnpm install`
4. Start the application: `pnpm start`

## Usage

1. Access the application in your web browser at `http://localhost:3000`.
2. Use the button to open the modal form and create new users.
3. View the list of users on the main page and use the “Delete” button to remove users.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request to improve this project.

## License

This project is licensed under the MIT License.
I hope this format is helpful for documenting your project! You can adjust any details as necessary.
