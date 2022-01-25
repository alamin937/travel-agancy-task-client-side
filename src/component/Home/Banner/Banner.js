import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <Row>
                        <Col className='banner' style={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'black',color:'white',textAlign:'center'}} sm={6} md={6}>
                            <h2>GET AWAY <br /> FOR THE WEEKEND</h2>
                        </Col>
                        <Col sm={6} md={6}>
                            <img style={{width:'100%'}} src='https://images.unsplash.com/photo-1615412704911-55d589229864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className='ban'>
                    <h1 style={{fontStyle:'italic',textAlign:'center'}}>The World You <br /> Never Seen</h1>
                </Carousel.Item>
                <Carousel.Item className='ba'>
                   
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;