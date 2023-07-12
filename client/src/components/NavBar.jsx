import React from 'react';


function NavBar() {
    return (
        <nav>
        <ul>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
            <a href="/books">Books</a>
            </li>
            <li>
            <a href="/authors">Authors</a>
            </li>
            <li>
            <a href="/profile">Profile</a>
            </li>
            {/* <li>
            <a href="/signin">Sign In/Sign Out</a>
            </li> */}
        </ul>
        </nav>
    );
}

export default NavBar;