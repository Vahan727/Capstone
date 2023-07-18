import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import BookCard from '../components/BookCard';
import {Link} from 'react-router-dom'

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


const mappedOldestBooks = oldestBooks.map((book) => {
    return (
        <BookCard 
            key={book.id}
            book={book}
            id={book.id}
        />
    )
})  

const mappedShortestBooks = shortestBooks.map((book) => {
    return (
        <BookCard
            key={book.id}
            book={book}
            id={book.id}
        />
    )
})


    return (
        <main>
        <div>
        <NavBar />
        <h2>Librarified</h2>
        <Link to={`/process`}>
        <button className="primary" >Login/Signup</button>
        </Link> 
        <h3>Check out some of our Oldest Books</h3>
        {mappedOldestBooks}
        <h3>Check out some of our Shortest Books</h3>
        {mappedShortestBooks}
        </div>
        </main>
    );
}

export default Home;