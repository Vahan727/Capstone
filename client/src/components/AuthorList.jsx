import React, { useEffect, useState } from 'react';
import AuthorCard from './AuthorCard'
import { Container, Row, Col } from 'react-bootstrap';

function AuthorList() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = () => {
        fetch(`/api/authors`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setAuthors(data);
        })
        .catch(error => console.error(error));
    };


    // const mappedAuthors = authors.map((author) => {
    //     return (
    //         <AuthorCard 
    //             key={author.id}
    //             author={author}
    //             id={author.id}
    //         />
    //     )
    // })   
    
    // return (
    //     <main className="author">
    //         {/* <Search 
    //         search={search}
    //         handleSearch={handleSearch}
    //         /> */}
    //     {mappedAuthors}
    //     </main>
    // )

const mappedAuthors = authors.map(author => (
    <Col md={3} className="my-3" key={author.id}>
        <AuthorCard author={author} />
    </Col>
    ));

    return (
    <main>
        <Container>
        <Row >{mappedAuthors}</Row>
        </Container>
    </main>
    );
}

export default AuthorList;