import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopRated = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://pure-dawn-69415.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.slice(7,10)))
    }, [])



    return (
        <div style={{marginLeft:'10px', marginTop:'40px'}}>
            <h1 style={{marginTop:'-40px', marginBottom:'15px'}}>Top Rated</h1>
            <Row xs={1} md={1} className="g-4">

                {
                    blogs.map(blog => <div>
                        <Col>
                            <Card>
                            <Card.Img variant="top" src={`data:image/*;base64,${blog.img}`} />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Text>
                                        {blog.description}
                                    </Card.Text>
                                    <h6>Price: ${blog.cost}</h6>
                                    <h6>Category: {blog.category}</h6>
                                </Card.Body>
                                <Link to={`/placeorder/${blog._id}`}><Button style={{width:'100%'}}>Book</Button> </Link>
                            </Card>
                        </Col>
                    </div>)
                }

            </Row>
        </div>
    );
};
export default TopRated;