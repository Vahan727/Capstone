import React, { useEffect, useState } from 'react';
import AuthorCard from './AuthorCard'

function AuthorList() {
    const [author, setAuthor] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = () => {
        fetch(`/api/authors`)
        .then(response => response.json())
        .then(data => {
            setAuthor(data.authors);
            // setTotalPages(data.pagination.pageTotal);
        })
        .catch(error => console.error(error));
    };

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

    const mappedAuthors = authors.map((author) => {
        return (
            <AuthorCard 
                key={author.id}
                author={author}
                id={author.id}
            />
        )
    })   
    
    return (
        <main className="author">
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
        {mappedAuthors}
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

export default AuthorList;