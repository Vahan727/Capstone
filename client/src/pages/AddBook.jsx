import React from 'react';
import BookForm from '../components/BookForm';
import NavBar from '../components/NavBar';


function AddBook() {
    // return (
    //     <div>
    //     <NavBar />
    //     <h2>Add a Book</h2>
    //     <BookForm />
    //     </div>
    // );
return (
    <div className="add-book-page">
        <NavBar />
        <div className="add-book-content">
            <h2 className="add-book-heading">Add a Book</h2>
            <div className="add-book-form-container">
                <BookForm />
            </div>
        </div>
    </div>
);
}

export default AddBook;