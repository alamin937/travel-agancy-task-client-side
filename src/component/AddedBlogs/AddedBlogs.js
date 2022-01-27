import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const AddedBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://pure-dawn-69415.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.slice(1,7)))
    }, [])



    return (
        <div style={{marginLeft:'10px', marginTop:'40px'}}>
            <Row xs={1} md={3} className="g-4">

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
                            </Card>
                        </Col>
                    </div>)
                }

            </Row>
        </div>
    );
};
export default AddedBlogs;