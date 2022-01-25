import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../UseHooks/UseAuth';

const Login = () => {
    const {logIn,googleSignIn} = UseAuth()
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    let navigate = useNavigate();
    let location = useLocation();
    
    const handleLogin = e =>{

        e.preventDefault();
        logIn(email,password,navigate,location)
    }


    const google = () =>{
        googleSignIn(navigate,location)
    }





    return (
       <div>
          
            <div style={{display:'flex', alignItems:'center',justifyContent:'center', marginTop:'80px',color:'white'}}>
            <div style={{backgroundColor:'#28385E', padding:'80px 22px'}}>
            <h1 style={{margin:'0', marginTop:'-40px', textAlign:'center', marginBottom:'30px',color:'white'}}>Login Here</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{fontWeight:'700'}}>Email address</Form.Label>
                    <Form.Control onChange={e => setEmail(e.target.value)} style={{width:'300px'}} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{fontWeight:'700'}}>Password</Form.Label>
                    <Form.Control onChange={e => setPassword(e.target.value)} style={{width:'300px'}} type="password" placeholder="Password" />
                </Form.Group>
                <Button style={{width:'300px'}} variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <Button style={{width:'300px', marginTop:'10px'}} onClick={google}>Google SignIn</Button>
            <p style={{marginTop:'15px'}}>Not Register? Please <Link style={{color:'white', fontWeight:'700'}} to='/register'>Registration</Link> </p>
            </div>
        </div>
       </div>
    );
};

export default Login;