import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


const AddBlogs = () => {

    const [title, setTitle] = useState('')
    const [info, setInfo] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [cost, setCost] = useState('')
    const [location, setLocation] = useState('')
    const [img, setImg] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('title', title);
        formData.append('info', info);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('cost', cost);
        formData.append('location', location);
        formData.append('img', img);

        fetch('https://pure-dawn-69415.herokuapp.com/blogs', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert("Added Successfully")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    return (
        <div>
            <div style={{ backgroundColor: 'black', padding: '5px 20px', color: 'white' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Travel Info</Form.Label>
                        <Form.Control onChange={e => setInfo(e.target.value)} type="text" placeholder="Enter info" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label> <br />
                        <textarea onChange={e => setDescription(e.target.value)} style={{ width: '100%' }} placeholder='Description'></textarea>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        <Form.Control onChange={e => setCategory(e.target.value)} type="text" placeholder="Enter category" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Cost of Travel</Form.Label>
                        <Form.Control onChange={e => setCost(e.target.value)} type="text" placeholder="Enter cost" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Location</Form.Label>
                        <Form.Control onChange={e => setLocation(e.target.value)} type="text" placeholder="Enter location" />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Default file input example</Form.Label>
                        <Form.Control  onChange={e => setImg(e.target.files[0])} accept='image/*' type="file" />
                    </Form.Group>

                    <Button style={{ width: '100%' }} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddBlogs;