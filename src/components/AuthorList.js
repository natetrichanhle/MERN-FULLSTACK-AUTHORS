import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton'

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => setAuthors(res.data));
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return (
        <div>
            {authors.map((author, index) => {
                return (
                    <p key={index}>
                        <Link to={'/author/' + author._id}>
                            {author.name}
                        </Link>
                        |
                        <Link to={'/author/edit/' + author._id}>
                            Edit
                        </Link>
                        |
                        <DeleteButton
                            authorId={author._id}
                            successCallback={() => removeFromDom(author._id)}
                        />
                    </p>
                )
            })}
        </div >
    )
}

export default AuthorList;