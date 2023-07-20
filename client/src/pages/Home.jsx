import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import BookCard from '../components/BookCard';
import { Container, Row, Col } from 'react-bootstrap';


function Home() {
const [oldestBooks, setOldestBooks] = useState([])
const [shortestBooks, setShortestBooks] = useState([])

const fetchOldestBooks = () => {
    fetch(`/api/oldest_books`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setOldestBooks(data);
    })
    .catch(error => console.error(error));
};

const fetchShortestBooks = () => {
    fetch(`/api/shortest_books`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setShortestBooks(data);
    })
    .catch(error => console.error(error));
}

useEffect(() => {
    fetchOldestBooks();
    fetchShortestBooks();
}, []);


// const mappedOldestBooks = oldestBooks.map((book) => {
//     return (
//         <BookCard 
//             key={book.id}
//             book={book}
//             id={book.id}
//         />
//     )
// })  

// const mappedShortestBooks = shortestBooks.map((book) => {
//     return (
//         <BookCard
//             key={book.id}
//             book={book}
//             id={book.id}
//         />
//     )
// })


//     return (
//         <main>
//         <div>
//         <NavBar />
//         <h2>Librarified: Timeless Books and Timeless Authors </h2>
//         <h3>Check out some of our Oldest Books</h3>
//         {mappedOldestBooks}
//         <h3>Check out some of our Shortest Books</h3>
//         {mappedShortestBooks}
//         </div>
//         </main>
//     );
const mappedOldestBooks = oldestBooks.map(book => (
    <Col md={4} key={book.id}>
        <BookCard book={book} />
    </Col>
));

const mappedShortestBooks = shortestBooks.map(book => (
    <Col md={4} key={book.id}>
        <BookCard book={book} />
    </Col>
));

return (
    <main>
        <Container>
            <div>
            <NavBar />
            <h2 className="web-name italic">Librarified</h2>
            <h2 className="home-heading italic">Timeless Books and Timeless Authors</h2>
            <h3 className="home-text">Check out some of our Oldest Books</h3>
            <Row>{mappedOldestBooks}</Row>
            <h3 className="home-text">Check out some of our Shortest Books</h3>
            <Row>{mappedShortestBooks}</Row>
            </div>
        </Container>
    </main>
);
}

export default Home;