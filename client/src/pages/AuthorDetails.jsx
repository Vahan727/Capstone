import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import NavBar from '../components/NavBar';
import BookCard from '../components/BookCard';


function AuthorDetail() {

const [author, setAuthor] = useState()

const {id} = useParams()


function getAuthor() {
    fetch(`/api/authors/${id}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        setAuthor(data)
    })
}

useEffect(() => {
    getAuthor()
}, [])

const booksByAuthor = author.books_by_author

const mappedBooks = booksByAuthor.map((book) => {
    return (
        <BookCard 
            key={book.id}
            author={book}
            id={book.id}
        />
    )
})   
if (!author) {
    return null
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
        <h3>Famous Books</h3>
        {mappedBooks}
    </div>
    
    <section>
        <ul>
            <button className="primary" >Add To Favorites</button> 
        </ul>
    </section>
    </>
    );
}

export default AuthorDetail;