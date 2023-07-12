import React, { useEffect, useState } from 'react';
import BookCard from './BookCard'

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        fetch(`/api/books`)
        .then(response => response.json())
        .then(data => {
            setBooks(data.books);
        })
        .catch(error => console.error(error));
    };

    const mappedBooks = books.map((book) => {
        return (
            <BookCard 
                key={book.id}
                book={book}
                id={book.id}
            />
        )
    })   
    
    return (
        <main className="books">
            <Search 
            search={search}
            handleSearch={handleSearch}
            />
        {mappedBooks}
        </main>
    )
}

export default BookList;