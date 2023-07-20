import React from 'react';
import AuthorList from '../components/AuthorList';
import NavBar from '../components/NavBar';


function Authors() {
    return (
        <div>
        <NavBar />
        <div className="info-heading">
            <h2 className="info-title">Authors</h2>
        </div>
        <AuthorList />
        </div>
    );
}

export default Authors;