import React, { useState, useEffect } from 'react'
// import axios from 'axios'

function ClimateMigrationUseForm() {
    const [values, setValues] = useState({
        region: '',
        country: '',
        location: '',
        title: '',
        story: '',
        picture: '',
        email: '',
        nickname: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({ 
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
    }

    const submitData = async () => {
        try {
            const result = await fetch('http://localhost:5000/posts', {
                method: 'post',
                mdoe: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    region: '',
                    country: '',
                    location: '',
                    title: '',
                    story: '',
                    image: '',
                    email: '',
                    nickname: ''
                })
            })
            console.log(result)
        } catch(err) {
            console.log(err)
        }
    };

    return { handleChange, handleSubmit, values, submitData }
}

export default ClimateMigrationUseForm
