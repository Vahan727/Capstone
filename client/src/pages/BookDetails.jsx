import React, {useState, useEffect} from 'react';
import {useParams, Link, useHistory} from 'react-router-dom'
import NavBar from '../components/NavBar';
// import BookList from '../components/BookList';
import Button from 'react-bootstrap/Button';
import AuthorCard from '../components/AuthorCard';


function BookDetail() {
const history = useHistory()
const [book, setBook] = useState()
// const [showEdit, setShowEdit] = useState(false)
// function toggleShowEdit() {
//     setShowEdit(prev => !prev)
// }

const {id} = useParams()

// function favoriteBook() {
//     fetch(`/api/libraries`, {
//         method:"POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(book)
//     })
//     .then(res => res.json())
// }

function getBook() {
    fetch(`/api/books/${id}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        setBook(data)
    })
}


useEffect(() => {
    getBook()
}, [])

function handleDelete() {
    fetch(`/api/books/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
            history.push("/books");
            } else {
            throw new Error("Error confirming delete");
            }
        })
        .catch((error) => {
        console.error(error);
    });
}


if (!book) {
    return null
}

// return ( 
//     <>
//     <div>
//     <NavBar />
//     <h2>Book Details</h2>
//     </div>
//     <div className="detailsContainer" >
//         <figure className="bookImg">
//             <img src={book.image} alt={book.title} />
//         </figure>
//         <p className="title">  {book.title}</p>
//         {book.author ? <p className="author">By: {book.author.name} </p> : null}
//         <p className="publicationDate">Published: {book.publication_date}</p>
//         <p className="length">Page Count:  {book.length}</p>
//         <Link to={`/edit_book/${book.id}`}>
//         <Button className="primary navbar-button" >Edit Book</Button>
//         </Link>
//         <Button className="primary navbar-button" onClick={handleDelete}>Delete Book</Button> 
//     </div>
//     <section>
//     {
//     book.author ? 
//     <figure className="bookAuthorImg">
//             <img src={book.author.image} alt={book.title} />
//     </figure> : null
//     }
//     </section>
//     </>
//     );

return (
    <>
        <div className="book-detail-page">
            <NavBar />
            <div className="book-details">
            <h2>Book Details</h2>
            <div className="book-content">
                <figure className="book-img">
                <img src={book.image} alt={book.title} />
                </figure>
                <div className="book-info">
                <p className="title">{book.title}</p>
                {book.author ? <p className="author">By: {book.author.name} </p> : null}
                <p className="publication-date">Published: {book.publication_date}</p>
                <p className="length">Page Count: {book.length}</p>
                <div className="buttons-container">
                    <Link to={`/edit_book/${book.id}`}>
                    <Button className="primary navbar-button">Edit Book</Button>
                    </Link>
                    <Button className="primary navbar-button" onClick={handleDelete}>
                    Delete Book
                    </Button>
                </div>
                </div>
            </div>
            {book.author && (
            <div className="author-card">
                <AuthorCard author={book.author} />
            </div>
            )}
            </div>
        </div>
    </>
);

}

export default BookDetail;