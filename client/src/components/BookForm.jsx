import React from 'react';
import { useHistory } from "react-router-dom";
import {useFormik} from "formik"
import * as yup from "yup"


function BookForm() {

// const formOutline = {title:"", author:"", length:"", publication_date:"",image: ""}

// const [formData, setFormData] = useState(formOutline)

// function handleOnChange(e){
//     setFormData({...formData, [e.target.name]: e.target.value});

// }

// function handleOnSubmit(e){
//     e.preventDefault();
//     fetch(`/books`, {
//         method:"POST",
//         headers: {
//         "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(res=>res.json())
//     .then(()=>history.push("/books"))
//     setFormData(formOutline)
// }
const history = useHistory()
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
        fetch("/api/books", {
            method: "POST",
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


    return (
        // <div className="new-book-form">
        //     <h2>New Book</h2>
        //     <form onSubmit={(e)=>{handleOnSubmit(e)}}>
        //     <input type="text" name="name"  required placeholder="Title" value={formData.title} onChange={handleOnChange}/>
        //     <input type="text" name="author"  required placeholder="Author" value={formData.author} onChange={handleOnChange}/>
        //     <input type="text" name="length"  required placeholder="Page Count" value={formData.length} onChange={handleOnChange}/>
        //     <input type="text" name="publication_date" required placeholder="Publication Date" value={formData.publication_date} onChange={handleOnChange}/>
        //     <input type="text" name="image" required placeholder="image" value={formData.image} onChange={handleOnChange}/>
        //     <button type="submit">Add Book</button>
        //     </form>
        // </div>
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
    );
}

export default BookForm