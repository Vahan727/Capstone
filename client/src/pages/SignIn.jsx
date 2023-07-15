import React, { useState, useContext } from 'react';
import { UserContext } from '../components/Context';

function SignUp() {
const { updateUserState } = useContext(UserContext);
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleUsernameChange = (event) => {
    setUsername(event.target.value);
};

const handleEmailChange = (event) => {
    setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
            if (data.user) {
            const { id } = data.user; 
            const updatedUserState = {
                id: id,
                username: username,
                email: email,
                signedIn: true
            };
            updateUserState(updatedUserState);
            console.log(updatedUserState);
            }
        })
    .catch(error => console.error(error));;
    // Reset the form fields
    setUsername('');
    setEmail('');
    setPassword('');
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
            value={username}
            onChange={handleUsernameChange}
        />
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
        />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            />
        </div>
        <button type="submit">Register</button>
        </form>
    </div>
    );
}

export default SignUp;