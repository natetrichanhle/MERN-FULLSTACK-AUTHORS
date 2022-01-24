import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const Detail = (props) => {
    const [author, setAuthor] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <p>Name: {author.name}</p>
            <Link to={`/author/edit/${author._id}`}>
                Edit
            </Link>
        </div>
    )
}

export default Detail;