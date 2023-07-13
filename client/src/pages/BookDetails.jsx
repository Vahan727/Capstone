import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import NavBar from '../components/NavBar';



function BookDetail() {

const [book, setBook] = useState()

const {id} = useParams()

useEffect(() => {
    getBook()
}, )



function getBook() {
    fetch(`/api/books/${id}`)
    .then(resp => resp.json())
    .then(data => setBook(data))
}


return ( 
    <>
    <div>
    <NavBar />
    <h2>Book Details</h2>
    </div>
    <div className="detailsContainer" >
        <figure className="bookImg">
            <img src={book.image} alt={book.name} />
        </figure>
        <p className="title">  {book.title}</p>
        <p className="author"> {book.author.name} </p>
        <figure className="bookAuthorImg">
            <img src={book.author.image} alt={book.author.name} />
        </figure>
        <p className="publicationDate"> {book.publication_date}</p>
        <p className="length">Page Count:  {book.length}</p>
    </div>
    <section>
        <ul>
            <button className="primary" >Add To Favorites</button> 
        </ul>
    </section>
    </>
    );
}

export default BookDetail;