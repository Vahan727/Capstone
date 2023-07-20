import React from "react";
import {Link} from 'react-router-dom'


function AuthorCard({author}) {

// return (
//     <ul className="card">
//     <img src={author.image} alt={author.name} />
//     <h4>{author.name}</h4>
//     <p>Born: {author.date_of_birth}</p>
//     <Link to={`/author_details/${author.id}`}>
//     <button className="primary" >Author Details</button>
//     </Link> 
//     </ul>
// );
return (
    <div className="card author-card shadow-sm">
        <img src={author.image} className="card-img-top author-image" alt={author.name} />
        <div className="card-body text-center">
        <h4 className="card-title">{author.name}</h4>
        <p className="card-text">Born: {author.date_of_birth}</p>
        <Link to={`/author_details/${author.id}`} className="btn btn-primary btn-card">
            Author Details
        </Link>
        </div>
    </div>
);
}


export default AuthorCard;