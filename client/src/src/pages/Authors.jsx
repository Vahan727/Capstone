import React, { useState } from 'react';
import AuthorList from '../components/AuthorList';
import NavBar from '../components/NavBar';


function Authors() {
    return (
        <div>
        <NavBar />
        <h2>Authors</h2>
        <AuthorList />
        </div>
    );
}

export default Authors;