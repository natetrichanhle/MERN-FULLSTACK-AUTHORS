import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';
import Form from '../components/Form';
import DeleteButton from '../components/DeleteButton'

const Update = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, []);

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/edit/' + id, author)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update an Author</h1>
            {loaded && (
                <>
                    <Form
                        onSubmitProp={updateAuthor}
                        initialName={author.name}
                    />
                    <DeleteButton 
                    authorId = {author._id}
                    successCallback = {() => history.push('/')}
                    />
                </>
            )}
        </div>
    )
}

export default Update;