import React from 'react';
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';


function NavBar() {
    return (
        <nav>
        <ul>
            <Link to="/">
                {/* <button className="primary">Librarified</button> */}
                <Button className="primary">Librarified</Button>
            </Link>
            <Link to="/books">
                <button className="primary">Books</button>
            </Link>
            <Link to="/authors">
                <button className="primary">Authors</button>
            </Link>
            <Link to="/profile">
                <button className="primary">Profile</button>
            </Link>
            {/* <Link to="/process">
                <button className="primary" >Logout</button>
            </Link>  */}
            {/* <li>
            <a href="/">Librarified</a>
            </li>
            <li>
            <a href="/books">Books</a>
            </li>
            <li>
            <a href="/authors">Authors</a>
            </li>
            <li>
            <a href="/profile">Profile</a>
            </li> */}
            {/* <li>
            <a href="/signin">Sign In/Sign Out</a>
            </li> */}
        </ul>
        </nav>
    );
}

export default NavBar;