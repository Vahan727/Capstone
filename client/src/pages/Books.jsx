import React from 'react';
import BookList from '../components/BookList';
import NavBar from '../components/NavBar';


function Books() {
    return (
        <div>
        <NavBar />
        <div className="info-heading">
            <h2 className="info-title">Books</h2>
        </div>
        <BookList />
        </div>
    );
}

export default Books;