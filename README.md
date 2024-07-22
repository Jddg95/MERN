# Google Books Search Engine with GraphQL

## Description

This project is a book search engine that allows users to search for new books to read and save their favorite books for future reference. It is built using the MERN stack (MongoDB, Express.js, React, Node.js) and utilizes Apollo Server to implement GraphQL queries and mutations for fetching and modifying data. The application is deployed on Render and uses MongoDB Atlas as the database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jddg95/MERN.git
   ```
2. Navigate to the project directory: 
   ```bash
   cd mern-challenge
   ```
3. Install dependencies for both the client and server 
   ```bash 
   npm install
   cd client
   npm install
   cd ..
   ```

4. Start the development server
   ```bash 
   npm run develop
   ```

## Usage
   1. Open your browser and go to http://localhost:3000.

   2. You will be presented with a menu with options to "Search for Books" and "Login/Signup," and an input field to search for books and a submit button.

   3. Use the input field to search for books by entering a search term and clicking the submit button.

   4. If you are not logged in, you can view the search results but cannot save books to your account.

   5. To save books, log in or sign up using the "Login/Signup" menu option.

   6. Once logged in, you can save books to your account by clicking the "Save" button on a book's search result.

   7. You can view your saved books by clicking on the "Saved Books" menu option.

   8. To remove a book from your saved list, click the "Remove" button on the book.

   9. Log out by clicking the "Logout" button.

## Features

   * Search for Books: Search for books using the Google Books API.

   * User Authentication: Sign up and log in to save books to your account.

   * Save Books: Save books to your account for future reference.
   
   * View Saved Books: View and manage your saved books.
   
   *Responsive Design: Fully responsive design for mobile and desktop users.

## Technologies Used

   * MongoDB: Database

   * Express.js: Server framework
   
   * React: Front-end framework
   
   * Node.js: JavaScript runtime
   
   * Apollo Server: GraphQL server
   
   * GraphQL: Query language for APIs
   
   * JWT: JSON Web Tokens for authentication
   
   * MongoDB Atlas: Cloud database service
   
   * Render: Deployment platform
   
## Deployment

   The application is deployed on Render and uses MongoDB Atlas for the database. Follow the Deploy with Render and MongoDB Atlas walkthrough for detailed deployment instructions.

## Contributing

Contributions are welcome! Please follow these steps:

   1. Fork the repository.

   2. Create a new branch (git checkout -b feature/your-feature-name).
   
   3. Make your changes.

   4. Commit your changes (git commit -m 'Add some feature').

   5. Push to the branch (git push origin feature/your-feature-name).
   
   6. Open a pull request.

## License

This project is licensed under the MIT License.
