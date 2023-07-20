import React from 'react';
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';


function NavBar() {
    return (
        <nav className="navbar-container">
        <ul>
            <Link to="/">
                <Button className="primary navbar-button">Librarified</Button>
            </Link>
            <Link to="/books">
                <Button className="primary navbar-button">Books</Button>
            </Link>
            <Link to="/authors">
                <Button className="primary navbar-button">Authors</Button>
            </Link>
            <Link to="/profile">
                <Button className="primary navbar-button">Profile</Button>
            </Link>
        </ul>
        </nav>
    );
}

export default NavBar;