import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../UseHooks/UseAuth';

const Register = () => {
    const {user,register,error} = UseAuth()

    const [name, setName] = useState()
    const [email,setEmail]= useState()
    const [password,setPassword] = useState()


    const handleRegister = e =>{
        e.preventDefault()
        register(email,password,name);
    }


    return (
       <div>
          
            <div style={{display:'flex', alignItems:'center',justifyContent:'center', marginTop:'80px',color:'white'}}>
            <div style={{backgroundColor:'#28385E', padding:'50px 22px',borderRadius:'20px'}}>
            <h1 style={{margin:'0', marginTop:'-20px', textAlign:'center', marginBottom:'30px',color:'white'}}>Create Account</h1>
            <p style={{fontWeight:'700', textAlign:'center'}}>{error}</p>
            {user?.email && <p style={{fontWeight:'700', textAlign:'center', color:'ivory'}}>REGISTRATION SUCCESSFULLY</p>}
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{fontWeight:'700'}}>Your Name</Form.Label>
                    <Form.Control onChange={e => setName(e.target.value)} style={{width:'300px'}} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{fontWeight:'700'}}>Email address</Form.Label>
                    <Form.Control onChange={e => setEmail(e.target.value)} style={{width:'300px'}} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{fontWeight:'700'}}>Password</Form.Label>
                    <Form.Control onChange={e => setPassword(e.target.value)} style={{width:'300px'}} type="password" placeholder="Password" />
                </Form.Group>
                <Button style={{width:'300px'}} variant="primary" type="submit">
                   Register
                </Button>
            </Form>
            <p style={{marginTop:'15px'}}>Already Register? Please <Link style={{color:'white', fontWeight:'700'}} to='/login'>LogIn</Link> </p>
            </div>
        </div>
       </div>
    );
};

export default Register;