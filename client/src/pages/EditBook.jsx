import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";


function BookForm() {
const [book, setBook] = useState()
const formOutline = {title:"", author:"", length:"", publication_date:"",image: ""}

const [formData, setFormData] = useState(formOutline)
const history = useHistory()

const {id} = useParams()

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

function handleOnChange(e){
    setFormData({...formData, [e.target.name]: e.target.value});

}



function handleOnSubmit(e){
    e.preventDefault();
    fetch(`/books`, {
        method:"POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(()=>history.push("/"))
    setFormData(formOutline)
}


    return (
        <div className="new-book-form">
            <h2>New Book</h2>
            <form onSubmit={(e)=>{handleOnSubmit(e)}}>
            <input type="text" name="name"  required placeholder={book.title} value={formData.title} onChange={handleOnChange}/>
            <input type="text" name="author"  required placeholder={book.author.name} value={formData.author} onChange={handleOnChange}/>
            <input type="text" name="length"  required placeholder={book.length} value={formData.length} onChange={handleOnChange}/>
            <input type="text" name="publication_date" required placeholder={book.publication_date} value={formData.publication_date} onChange={handleOnChange}/>
            <input type="text" name="image" required placeholder="image" value={formData.image} onChange={handleOnChange}/>
            <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default BookForm