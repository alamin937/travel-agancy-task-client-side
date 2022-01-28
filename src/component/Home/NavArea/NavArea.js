import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../UseHooks/UseAuth';
import './NavArea.css'

const NavArea = () => {
    const {user, logOut} = UseAuth()
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <h5 style={{fontFamily:'Brush Script MT', fontSize:'40px'}}>Travel Agency</h5>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto navarea">
                                <Link to='/home'>Home</Link>
                                {/* <Link to='/about'>About</Link> */}
                                <Link to='/experience'>Add Travel Experience</Link>
                                <Link to='/dashboard'>DashBoard</Link>
                               { user?.email ? <div>
                                
                                <Button onClick={logOut} style={{marginLeft:'15px'}}>Log Out</Button>
                               </div>:
                                <Link to='/login'>Login</Link> }
                                <span style={{color:'white', fontSize:'25px', marginLeft:'15px'}}>{user?.displayName}</span>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default NavArea;