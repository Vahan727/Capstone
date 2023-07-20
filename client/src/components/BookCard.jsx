import React from "react";
import {Link} from 'react-router-dom'


function BookCard({book}) {

// return (
//     <ul className="card">
//     <img src={book.image} alt={book.title} />
//     <h4>{book.title}</h4>
//     {book.author ? <p>By: {book.author.name}</p> : null}
//     <Link to={`/book_details/${book.id}`}>
//     <button className="primary" >Book Details</button>
//     </Link> 
//     </ul>
// );

return (
    <div className="card book-card shadow-sm">
        <div className="card-img-container">
        <img 
        src={book.image} 
        className="card-img-top mx-auto book-image" 
        alt={book.title} 
        style={{ width: '200px' }}
        />
        </div>
        <div className="card-body text-center">
        <h4 className="card-title">{book.title}</h4>
        {book.author && <p className="card-text">By: {book.author.name}</p>}
        <Link to={`/book_details/${book.id}`} className="btn btn-primary btn-card">
            Book Details
        </Link>
        </div>
    </div>
);
}


export default BookCard;