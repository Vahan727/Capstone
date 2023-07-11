import React, { useEffect, useState } from 'react';
import BookCard from './BookCard'

function BookList() {
    const [books, setBooks] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(0);

    // useEffect(() => {
    //     fetchBooks(currentPage);
    // }, [currentPage]);

    // const fetchBooks = (page) => {
    //     fetch(`/api/books?page=${page}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setBooks(data.books);
    //         setTotalPages(data.pagination.pageTotal);
    //     })
    //     .catch(error => console.error(error));
    // };

    // const handleNextPage = () => {
    //     setCurrentPage(prevPage => prevPage + 1);
    // };

    // const handlePreviousPage = () => {
    //     setCurrentPage(prevPage => prevPage - 1);
    // };

    // const handleAddToFavorites = (bookId) => {
    //     // Perform logic to add the player to the active squad
    //     console.log('Adding book to user favorites:', bookId);
    // };

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
        {/* <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous Page
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next Page
        </button> */}
        {mappedBooks}
        </main>
    )
    //     <div>
    //     <ul>
    //         {books.map(book => (
    //         <li key={book}>
    //             {book}
    //             <button onClick={() => handleAddToFavorites(book)}>Add to Favorites</button>
    //         </li>
    //         ))}
    //     </ul>
        // <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        //     Previous Page
        // </button>
        // <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        //     Next Page
        // </button>
        // </div>
    // );
}

export default BookList;