import React from 'react';

function Search({search, handleSearch}){

    return (
        <div className="searchbar">
            <label htmlFor="search">Search by Book Title: </label>
            <input
            type="text"
            id="search"
            name="search"
            value={search}
            placeholder="Search..."
            onChange={handleSearch}
            />
        </div>
    );
}

export default Search;