import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import './ShowExperi.css'

const ShowExperi = () => {
    const { experiId } = useParams()
    const [experis, setExperis] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/experience/${experiId}`)
            .then(res => res.json())
            .then(data => setExperis(data))
    }, [experiId])


    return (
        <div style={{textAlign:'center', marginTop:'80px'}}>
            <Row xs={1} md={1} className="g-4">

                <Col>
                    <Card className='show'>
                        <Card.Body>
                            <Card.Title>{experis.location}</Card.Title>
                            <Rating readonly
                                initialRating={experis.rating}
                                style={{ fontSize: '30px', color: 'gold' }}
                                emptySymbol="far fa-star "
                                fullSymbol="fas fa-star"

                            >
                            </Rating>
                            <Card.Text style={{textAlign:'justify'}}>
                                {experis.placeDescription}
                            </Card.Text>
                            <h6>Expense: ${experis.expence}</h6>
                            <h6>Travel Date: {experis.date}</h6>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default ShowExperi;