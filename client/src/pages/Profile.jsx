import React from 'react';
import NavBar from '../components/NavBar';
// import UserContext from '../Context';
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
// import BookCard from '../components/BookCard';

function Profile({user, updateUser}) {
// const {user, setUser} = useContext(UserContext)
const history = useHistory()


function handleLogout() {
    fetch("/api/signout").then((res) => {
        if (res.ok){
            updateUser(null);
            history.push("/process");
        }
    });
}


    // return (
    //     <div>
    //     <NavBar />
    //     <h2>Profile</h2>
    //     <h3>Username: {user.username}</h3>
    //     <h3>Email: {user.email}</h3>
    //     {/* <h3>Favorite Books</h3>
    //     {favoriteBooks} */}
    //     <Button className="primary navbar-button" onClick={handleLogout}>Logout</Button> 
    //     {/* <button onClick={handleDelete}>Delete User</button> */}
    //     </div>
    // );

return (
    <div className="profile-page">
        <NavBar />
        <div className="profile-content">
        <h2>Profile</h2>
        <h3>Username: {user.username}</h3>
        <h3>Email: {user.email}</h3>
        <Button className="primary navbar-button" onClick={handleLogout}>
            Logout
        </Button>
        </div>
    </div>
);

}

export default Profile;