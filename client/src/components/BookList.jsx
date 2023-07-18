import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import BookCard from './BookCard'
import Search from './Search'

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        fetch(`/api/books`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setBooks(data);
        })
        .catch(error => console.error(error));
    };

    const [search, SetSearch] = useState('')

    function handleSearch(e) {
        SetSearch(e.target.value)
    }

    const filteredBooks = [...books].filter((el) => {
        return (
            el.title.toLowerCase().includes(search.toLowerCase()) || el.author.name.toLowerCase().includes(search.toLowerCase())
        )
    })

    const mappedBooks = filteredBooks.map((book) => {
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
        <Link to="/add_book">
        <button>Add a Book</button>
        </Link>
        {mappedBooks}
        </main>
    )
}

export default BookList;