import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import BookCard from './BookCard'
// import Search from './Search'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        fetch(`/api/books`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setBooks(data);
        })
        .catch(error => console.error(error));
    };

    const [search, SetSearch] = useState('')

    function handleSearch(e) {
        SetSearch(e.target.value)
    }

    const filteredBooks = [...books].filter((el) => {
        // if (el.author) {  
        return (
            // el.title.toLowerCase().includes(search.toLowerCase()) || el.author.name.toLowerCase().includes(search.toLowerCase())
            el.title.toLowerCase().includes(search.toLowerCase())
        )
    // }
    //     else {
    //         el.title.toLowerCase().includes(search.toLowerCase())
    //     }
    })

    // const mappedBooks = filteredBooks.map((book) => {
    //     return (
    //         <BookCard 
    //             key={book.id}
    //             book={book}
    //             id={book.id}
    //         />
    //     )
    // })   
    
    // return (
    //     <main className="books">
    //         <Search 
    //         search={search}
    //         handleSearch={handleSearch}
    //         />
    //     <Link to="/add_book">
    //     <button>Add a Book</button>
    //     </Link>
    //     {mappedBooks}
    //     </main>
    // )
const mappedBooks = filteredBooks.map(book => (
    <Col md={3} className="my-3" key={book.id}>
        <BookCard book={book} />
    </Col>
));

return (
    <main>
        <Container>
            <Row className="align-items-center mb-3">
            <Col md={6}>
                <InputGroup>
                <FormControl
                    placeholder="Search..."
                    value={search}
                    onChange={handleSearch}
                />
                </InputGroup>
            </Col>
            <Col md={6} className="text-md-right">
                <Button as={Link} to="/add_book" variant="primary" className="add-book-button">
                Add a Book
                </Button>
            </Col>
            </Row>
            <Row>{mappedBooks}</Row>
        </Container>
    </main>
);
}

export default BookList;