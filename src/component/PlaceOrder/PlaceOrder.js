import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import UseAuth from '../../UseHooks/UseAuth';

const PlaceOrder = () => {
    const [blog, setBlog] = useState({})
    const {user} = UseAuth()
    const { orderId } = useParams()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('https://pure-dawn-69415.herokuapp.com/placeorder', {
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert("Added Successfully")
                reset()
            }
        })
    };

    useEffect(() => {
        fetch(`https://pure-dawn-69415.herokuapp.com/blogs/${orderId}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [orderId])






    return (
        <div style={{ width: '80%', margin: '0 auto', marginTop: '40px' }}>
            <Row>
                <Col sm={12} md={6}>
                    <Row className="g-4">

                        <Col>
                            <Card>
                                <Card.Img variant="top" src={`data:image/*;base64,${blog.img}`} />
                                <Card.Body>
                                    <Card.Title> Location: {blog.title}</Card.Title>
                                    <Card.Title> Price: ${blog.cost}</Card.Title>

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Col>
                <Col sm={12} md={6}>
                   <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                       <div>
                       <form onSubmit={handleSubmit(onSubmit)}>
                        <label>User Name</label> <br />
                        <input defaultValue={user?.displayName} style={{width:'300px', padding:'2px', border:'1px solid grey', borderRadius:'5px'}} {...register("userName")} /> <br />
                        <label>User Email</label> <br />
                        <input  defaultValue={user?.email} style={{width:'300px', padding:'2px', border:'1px solid grey', borderRadius:'5px'}} {...register("email")} /> <br />
                        <label>User Number</label> <br />
                        <input style={{width:'300px', padding:'2px', border:'1px solid grey', borderRadius:'5px'}} {...register("userNumber")} /> <br />
                        <label>Location Name</label> <br />
                        <input style={{width:'300px', padding:'2px', border:'1px solid grey', borderRadius:'5px'}} {...register("location")} /> <br />
                        <label>Cost</label> <br />
                        <input style={{width:'300px', padding:'2px', border:'1px solid grey', borderRadius:'5px'}} {...register("price")} /> <br />
                        
                        <input style={{width:'300px', padding:'2px', border:'1px solid grey', borderRadius:'5px', marginTop:'15px'}} type="submit" />
                    </form>
                    <Link to='/dashboard'><Button style={{width:'300px', marginTop:'15px'}}>Go To Dashboard</Button> </Link>
                       </div>
                   </div>
                </Col>
            </Row>
        </div>
    );
};

export default PlaceOrder;