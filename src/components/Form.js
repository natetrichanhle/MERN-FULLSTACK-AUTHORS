import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default (props) => {
    const { initialName, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name</label><br />
                <input
                    type="text"
                    value={name} name='name'
                    onChange={(e) => { setName(e.target.value) }}
                />
            </p>
            <input type="submit" />
        </form>
    )
}