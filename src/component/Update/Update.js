import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { updateId } = useParams()
    const [update, setUpdate] = useState({})


    useEffect(() =>{
        fetch(`https://pure-dawn-69415.herokuapp.com/blogs/${updateId}`)
        .then(res => res.json())
        .then(data => setUpdate(data))
    },[updateId])


    const handleTitle = e =>{
        const updateTitleName = e.target.value;
        const updateUser = {title: updateTitleName, cost: update.cost}
        setUpdate(updateUser);
    }

    const handleCost = e =>{
            const updateCostPrice = e.target.value;
            const updateUser = {title: update.title, cost: updateCostPrice}
            setUpdate(updateUser)
    }

    const handleSubmit = e =>{
        e.preventDefault()

        fetch(`https://pure-dawn-69415.herokuapp.com/blogs/${updateId}`,{
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                alert("Update Successfully")
            }
        })
    }



    return (
        <div>
            <div style={{textAlign:'center', marginTop:'10px'}}>
            <h2>Name: {update.title}</h2>
            <h4>Name: {update.cost}</h4>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={update.title || ''} onChange={handleTitle} style={{width:'300px'}} type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control  value={update.cost || ''} onChange={handleCost} style={{width:'300px'}} type="text" placeholder="Enter price" />
                    </Form.Group>
                    <Button style={{width:'300px'}} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
        </div>
    );
};

export default Update;