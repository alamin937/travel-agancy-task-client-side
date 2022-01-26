import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddAdmin = () => {
    const [email, setEmail] = useState('')

    const handleChange = e =>{
        const user = {email}
        e.preventDefault();

        fetch('https://pure-dawn-69415.herokuapp.com/users/admin', {
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                alert("Admin Add Successfully")
            }
        })

    }




    return (
        <div>
            <Form onSubmit={handleChange}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Add Admin Email</Form.Label>
                    <Form.Control required onChange={e => setEmail(e.target.value)} style={{width:'300px'}} type="email" placeholder="Enter email" />
                </Form.Group>
                <Button style={{width:'300px'}} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddAdmin;