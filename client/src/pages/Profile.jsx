import React from 'react';
import NavBar from '../components/NavBar';
// import UserContext from '../Context';
import { useHistory } from 'react-router-dom'
// import BookCard from '../components/BookCard';

function Profile({user, updateUser}) {
// const {user, setUser} = useContext(UserContext)
const history = useHistory()


function handleDelete() {
    fetch(`/api/users`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
            updateUser(null);
            history.push("/");
            } else {
            throw new Error("Error confirming delete");
            }
        })
        .catch((error) => {
        console.error(error);
        });
}

// const userLibrary = user.user_library

// const favoriteBooks = userLibrary.map((book) => {
//     return (
//         <BookCard 
//             key={book.id}
//             book={book}
//             id={book.id}
//         />
//     )
// })   


    return (
        <div>
        <NavBar />
        <h2>Profile</h2>
        <h3>{user.username}</h3>
        <h3>{user.email}</h3>
        {/* <h3>Favorite Books</h3>
        {favoriteBooks} */}
        <button onClick={handleDelete}>Delete User</button>
        </div>
    );
}

export default Profile;