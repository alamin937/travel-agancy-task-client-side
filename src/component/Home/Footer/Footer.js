import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{backgroundColor:'#131F3D', padding:'40px 0', marginTop:'30px'}}>
           <div style={{width:'80%', margin:'0 auto', color:'white'}}>
           <Row>
                <Col style={{borderRight:'3px solid red'}} sm={12} md={4}>
                   
                
                    <p style={{textAlign:'justify', marginTop:'50px'}}>Travel agents offer advice on destinations, plan trip itineraries, and make travel arrangements for clients. Travel agents sell transportation, lodging, and admission to entertainment activities</p>
                </Col>
                <Col style={{borderRight:'3px solid red'}} sm={12} md={4}>
                    <h2>Quick Links</h2>
                    <p>Home</p>
                    <p>Support</p>
                    <p>Help</p>
                    <p>Category</p>
                </Col>
                <Col sm={12} md={4}>
                    <h3>NEWSLETTER</h3>
                    <p>Enter your email and we'll send you more information of.</p>
                </Col>
            </Row>
           </div>
        </div>
    );
};

export default Footer;