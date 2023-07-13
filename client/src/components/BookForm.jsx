import React, {useState} from 'react';
import { useHistory } from "react-router-dom";


function BookForm() {

const formOutline = {title:"", author:"", length:"", publication_date:"",image: ""}

const [formData, setFormData] = useState(formOutline)
const history = useHistory()

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
        <div className="new-shop-form">
            <h2>New Book</h2>
            <form onSubmit={(e)=>{handleOnSubmit(e)}}>
            <input type="text" name="name"  required placeholder="Title" value={formData.title} onChange={handleOnChange}/>
            <input type="text" name="author"  required placeholder="Author" value={formData.author} onChange={handleOnChange}/>
            <input type="text" name="length"  required placeholder="Page Count" value={formData.length} onChange={handleOnChange}/>
            <input type="text" name="publication_date" required placeholder="Publication Date" value={formData.publication_date} onChange={handleOnChange}/>
            <input type="text" name="image" required placeholder="image" value={formData.image} onChange={handleOnChange}/>
            <button type="submit">Add Shop</button>
            </form>
        </div>
    );
}

export default BookForm