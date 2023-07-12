import React, { useEffect, useState } from 'react';
import AuthorCard from './AuthorCard'

function AuthorList() {
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = () => {
        fetch(`/api/authors`)
        .then(response => response.json())
        .then(data => {
            setAuthor(data.authors);
        })
        .catch(error => console.error(error));
    };


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
        {mappedAuthors}
        </main>
    )
}

export default AuthorList;