import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import NavBar from '../components/NavBar';
import BookCard from '../components/BookCard';


function AuthorDetail() {

const [author, setAuthor] = useState()
const [booksByAuthor, setBooksByAuthor] = useState()
const {id} = useParams()


function getAuthor() {
    fetch(`/api/authors/${id}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        setAuthor(data)
        setBooksByAuthor(data.books_by_author)
    })
    .catch(error => {
        console.error('Error retrieving author:', error);
    });
}


useEffect(() => {
    getAuthor()
}, [])


if (!author) {
    return null
}

let mappedBooks = null

if (booksByAuthor) {
    console.log(booksByAuthor)
    mappedBooks = booksByAuthor.map(book => { 
        return (
            <BookCard 
                key={book.id}
                book={book}
                id={book.id}
            />
        )
    })   
}

return ( 
    <>
    <div>
    <NavBar />
    <h2>Author Details</h2>
    </div>
    <div className="detailsContainer" >
        <figure className="bookImg">
            <img src={author.image} alt={author.name} />
        </figure>
        <p className="name">  {author.name}</p>
        <p className="birth">Born: {author.date_of_birth} </p>
    </div>
    <div>
        <h3>Books by {author.name}</h3>
        {mappedBooks ? (
        <ul>{mappedBooks}</ul>
        ) : (
        <p>No books found for this author.</p>
        )}
    </div>
    </>
    );
}

export default AuthorDetail;