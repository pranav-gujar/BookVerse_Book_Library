# BookVerse
BookVerse developed as part of my web development internship at **CodeAlpha**. It represents the third task of my internship, focusing on creating a full-stack web application using Node.js, Express.js, MongoDB, and EJS.
BookVerse is a web application designed to manage and browse a collection of books. It allows users to add new books, search for specific titles, and manage borrowing and returning books.

## Features

- **Add Books**: Add new books to the collection with details like title, author, genre, publisher, and price.
- **Search**: Quickly find books by title using the search bar.
- **Borrow/Unborrow**: Mark books as borrowed or unborrowed. The borrowing status is maintained without changes on refresh.
- **Responsive Design**: The application is designed to be responsive and user-friendly on all devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Templating Engine**: EJS

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/bookverse.git
    cd bookverse
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Configure Environment Variables**:

4. **Start the Application**:
    ```bash
    npm run dev
    ```

5. **Access the Application**:
    Open your web browser and go to `http://localhost:8080`.

## Usage

- **Add a Book**: Navigate to the "Add Book" form to enter details of the new book.
- **Search for a Book**: Use the search bar to filter books by title.
- **Borrow/Unborrow Books**: Click the "Borrow" button to mark a book as borrowed. Once borrowed, the button changes to "Unborrow," which allows marking the book as returned.
