import React, { useState } from 'react';

function SignUp() {
// const { updateUser } = useContext(UserContext);
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
// const history = useHistory()

// const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
// };

// const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
// };

// const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('/api/users/signin', {
//         method: 'POST',
//         body: JSON.stringify({ username, email, password }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//         })
//         .then(response => response.json())
//         .then((user) => {
//             updateUser(user);
//             history.push("/");
//         })
//         .catch((err) => console.error(err));
// };;
const [data, setData] = useState({
    id: '',
    username: '',
    email: '',
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

    
    fetch('/users/signup', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: body
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setData({
            username: '',
            email: '',
            password: '',
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

return (
    <div>
        <h2>Sign Up</h2>
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
        <div>
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            value={data.email}
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            value={data.password}
            onChange={handleChange}
            />
        </div>
        <button type="submit">Register</button>
        </form>
    </div>
    );
}

export default SignUp;