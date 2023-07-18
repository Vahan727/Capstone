import React, { useState} from 'react';
// import UserContext from "../Context"
import {useHistory} from "react-router-dom"
import {useFormik} from "formik"
import * as yup from "yup"

function Login({updateUser}) {
const history = useHistory()
const [data, setData] = useState({
    id: '',
    username: '',
    password: '',
});

const handleChange = event => {
    const { name, value } = event.target;
    setData(prevState => ({
    ...prevState,
    [name]: value,
    }));
};

const handleSubmit = event => {
    event.preventDefault();


    // Prepare the request body with the form data
const body = JSON.stringify({
    ...data
});


    fetch('/api/users/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: body
    })
    .then(response => response.json())
    .then(user => {
        console.log(user)
        // setUser(user)
        
        setData({
            username: '',
            email: '',
            password: '',
        });
        updateUser(user)
        history.push("/")
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

return (
    <div>
        {/* <h2>Login</h2> */}
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            id="username"
            value={data.username}
            onChange={handleChange}
        />
        </div>
        {/* <div>
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            value={data.email}
            onChange={handleChange}
        />
        </div> */}
        <div>
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            value={data.password}
            onChange={handleChange}
            />
        </div>
        <button type="submit">Login</button>
        </form>
    </div>
    );
}

export default Login;