import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import AuthorList from '../components/AuthorList';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author/new', author)
            .then(res => {
                setAuthors([...authors, res.data]);
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <Form
                onSubmitProp={createAuthor}
                initialName=''
                errors={errors}
            />
            <hr />
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom} />}
        </div>
    )
}