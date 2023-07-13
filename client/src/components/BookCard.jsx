import React from "react";
import {Link} from 'react-router-dom'


function BookCard({book}) {

return (
    <ul className="card">
    <img src={book.image} alt={book.title} />
    <h4>{book.title}</h4>
    <p>By: {book.author.name}</p>
    <Link to={`/book_details/${book.id}`}>
    <button className="primary" >Book Details</button>
    </Link> 
    </ul>
);
}


export default BookCard;