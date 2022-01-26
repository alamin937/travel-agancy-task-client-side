import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ShowBlogs.css'

const ShowBlogs = () => {
    const [experiences, setExperiences] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const size = 10

    useEffect(() => {
        fetch(`http://localhost:5000/experience?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setExperiences(data.result)
                const count = data.count
                const pageNumber = Math.ceil(count/size);
                setPageCount(pageNumber);
            })
    }, [page])




    return (
        <div>
            <div className='showblogs'>
                <div className='first'>
                    <h1>main</h1>
                </div>
                <div style={{ width: '95%', margin: '0 auto' }}>
                    <div className="experi">

                        <div style={{marginLeft:'10px'}}>
                            <Row xs={1} md={4} className="g-4">

                                {
                                    experiences.map(experi => <div>
                                        <Col>
                                            <Card>

                                                <Card.Body>
                                                    <Card.Title>{experi.location}</Card.Title>
                                                    <Card.Text style={{textAlign:'justify'}}>
                                                        {experi.placeDescription}
                                                    </Card.Text>
                                                </Card.Body>
                                                <Link to={`/experience/${experi._id}`}><Button style={{width:'100%', borderRadius:'10px'}}>Details</Button></Link>
                                            </Card>
                                        </Col>
                                    </div>)
                                }
                                        
                            </Row>
                            <div className="pagina">
                                            {
                                                [...Array(pageCount).keys()].map(number =><button
                                                className={number === page ? 'selected' : ''}
                                                    key={number}
                                                    onClick={() => setPage(number)}
                                                >{number}</button>)
                                            }
                                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowBlogs;

