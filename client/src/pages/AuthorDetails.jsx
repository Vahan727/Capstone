import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import NavBar from '../components/NavBar';
import BookCard from '../components/BookCard';
import { Row, Col } from 'react-bootstrap';



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
            <Col md={4} key={book.id}>
            <BookCard book={book} />
            </Col>
        )
    })   
}

return ( 
    <>
    <div>
    <NavBar />
    <h2 className="author-title">Author Details</h2>
    </div>
    <div className="center-image">
        {/* <figure style={{justifyContent: "center"}}> */}
        <img src={author.image} alt={author.name} className="image-container"/>
        {/* </figure> */}
    </div>
    <div>
        <p className="author-details">  {author.name}</p>
        <p className="author-details">Born: {author.date_of_birth} </p>
    </div>
    <div>
        <h3>Books by {author.name}</h3>
        {mappedBooks ? (
        <Row>{mappedBooks}</Row>
        ) : (
        <p>No books found for this author.</p>
        )}
    </div>
    </>
    );
}

export default AuthorDetail;