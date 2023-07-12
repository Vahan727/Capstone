import React from 'react';
import BookList from '../components/BookList';
import NavBar from '../components/NavBar';


function Books() {
    return (
        <div>
        <NavBar />
        <h2>Books</h2>
        <BookList />
        </div>
    );
}

export default Books;