import React from 'react';
import { useHistory } from 'react-router-dom';

function SignOut() {
const history = useHistory();

const handleSignOut = () => {
    fetch('/api/users/signout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.message === 'User signed out') {
            const updatedUserState = {
                id: null,
                username: '',
                signedIn: false
            };
            updateUserState(updatedUserState);
            history.push('/');
            console.log('User signed out');
            alert('You have been signed out');
            } else {
            throw new Error('Failed sign out');
            }
        })
        .catch(error => console.error(error));
};

return (
    <div>
        <h2>Sign Out</h2>
        <button onClick={handleSignOut}>Sign Out</button>
    </div>
);
}

export default SignOut;