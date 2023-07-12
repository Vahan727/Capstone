import React from 'react';
import NavBar from '../components/NavBar';
import BookCard from '../components/BookCard';


function AuthorDetail() {

const [author, setAuthor] = useState()

const {id} = useParams()

useEffect(() => {
    getAuthor()
}, [location])



function getAuthor() {
    fetch(`/api/authors/${id}`)
    .then(resp => resp.json())
    .then(data => setAuthor(data))
}

const mappedBooks = author.books_by_author.map((book) => {
    return (
        <BookCard 
            key={book.id}
            author={book}
            id={book.id}
        />
    )
})   

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
        <p className="birth"> {author.date_of_birth} </p>
    </div>
    {mappedBooks}
    <section>
        <ul>
            <button className="primary" >Add To Favorites</button> 
        </ul>
    </section>
    </>
    );
}

export default AuthorDetail;