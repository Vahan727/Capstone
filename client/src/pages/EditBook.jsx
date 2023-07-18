import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";
import {useFormik} from "formik"
import * as yup from "yup"
import NavBar from "../components/NavBar"

function EditBook() {
const [book, setBook] = useState()
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


const schema = yup.object().shape({
    title: yup.string().required("required"),
    length: yup.number(),
    publication_date: yup.number(),
    image: yup.string()
});

const formik = useFormik({
    initialValues: {
        title: "",
        length: 0,
        publication_date: 0,
        image: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
        console.log(values);
        fetch(`/api/books/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(values),
        }).then((res) => {
            if (res.ok) {
                res.json().then((book) => {
                    console.log(book);
                    history.push(`/book_details/${book.id}`);
                });
            } else {
                res.json().then((err) => console.log("oops"));
            }
        });
    },
});


// const [formData, setFormData] = useState(formOutline)




// const formOutline = {title:"", author:"", length:"", publication_date:"",image: ""}

// function handleOnChange(e){
//     setFormData({...formData, [e.target.name]: e.target.value});

// }



// function handleOnSubmit(e){
//     e.preventDefault();
//     fetch(`/books/${id}`, {
//         method:"PATCH",
//         headers: {
//         "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(res=>res.json())
//     setFormData(formOutline)
//     .then(()=>history.push(`/book_details/${id}`))
    
// }

    return (
        <div>
        <div>
        <NavBar />
        <h2>Edit Book</h2>
        </div>
        <section>
			<form onSubmit={formik.handleSubmit} className="form">
				<label>Title </label>
				<input
					type="text"
					name="title"
					onChange={formik.handleChange}
					value={formik.values.title}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.title && formik.errors.title ? (
					<h3>{formik.errors.title}</h3>
				) : (
					""
				)}

				<label>Page Count</label>
				<input
					type="number"
					name="length"
					value={formik.values.length}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.length && formik.errors.length ? (
					<h3 style={{ color: "red" }}>{formik.errors.length}</h3>
				) : (
					""
				)}

				<label>Publication Year</label>
				<input
					type="number"
					name="publication_date"
					value={formik.values.publication_date}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.publication_date && formik.errors.publication_date ? (
					<h3 style={{ color: "red" }}>{formik.errors.publication_date}</h3>
				) : (
					""
				)}

                <label> Image </label>
				<input
					type="text"
					name="image"
					value={formik.values.image}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<input className="button" type="submit" />
			</form>
		</section>
        </div>
    );
}

export default EditBook