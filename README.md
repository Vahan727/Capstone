# Librarified

Librarified is a hypothetical book store. On the site you will be able to view books from different authors and genres. 

# User Stories
1. User will be able to browse through books based on different categories
3. User will be able to browse through authors based on different categories
4. User will be able to write reviews for a book

# Stretch Goals
1. User will be able to favorite books and see their favorites on their profile
2. User will be able to make and account or login as a user
3. Reading list where user can keep track of books to read next

# Models

<img src="./client/assets/schema-tables.png">

# API Endpoints

| API Route     | HTTP Verb | Purpose           | Deliverable |
|---------------|-----------|-------------------|-------------|
| /books        | Get       | Get all books     | core        |
| /books        | Post      | Post a new book   | core        |
| /books/{id}   | Get       | Get a book        | core        |
| /books/{id}   | Patch     | Edit a book       | core        |
| /books/{id}   | Delete    | Delete a book     | core        |
| /authors      | Get       | Get all authors   | core        |
| /authors      | Post      | Post a new author | core        |
| /authors/{id} | Get       | Get an author     | core        |
| /authors/{id} | Patch     | Edit an author    | core        |
| /authors/{id} | Delete    | Delete an author  | core        |
| /genres       | Get       | Get all genres    | core        |
| /reviews      | Get       | Get all reviews   | core        |
| /reviews      | Post      | Post new review   | core        |
| /reviews/{id} | Get       | Get a review      | core        |
| /reviews/{id} | Patch     | Edit a review     | core        |
| /reviews/{id} | Delete    | Delete a review   | core        |
| /awards       | Get       | Get all awards    | core        |
| /awards/{id}  | Get       | Get an award      | core        |


# Client Routes 

| Client Route  | Component           |
|---------------|---------------------|
| /             | Home.jsx            |
| /books        | Books.jsx           |
| /books/{id}   | Book-Details.jsx    |
| /authors      | Authors.jsx         |
| /authors/{id} | Authors-Details.jsx |
| /profile      | Profile.jsx         |
| /about        | About.jsx           |

# Wireframes

<img src="./client/assets/home.png">
<img src="./client/assets/books.png">
<img src="./client/assets/book-details.png">
<img src="./client/assets/authors.png">
<img src="./client/assets/author-details.png">
<img src="./client/assets/profile.png">

