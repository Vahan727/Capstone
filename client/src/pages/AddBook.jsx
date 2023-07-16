import React from 'react';
import BookForm from './BookForm';
import NavBar from '../components/NavBar';


function AddBook() {
    return (
        <div>
        <NavBar />
        <h2>Add a Book</h2>
        <BookForm />
        </div>
    );
}

export default AddBook;