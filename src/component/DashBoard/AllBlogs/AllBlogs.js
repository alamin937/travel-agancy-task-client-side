import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://pure-dawn-69415.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleDelete = (id) =>{
           const main = window.confirm("Are you sure?")
           if(main){
            fetch(`https://pure-dawn-69415.herokuapp.com/blogs/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount){
                    alert("Deleted successfully")
                    const remaining = blogs.filter(blog => blog._id !==id)
                    setBlogs(remaining)
                }
            })
           }
    }



    return (
        <div style={{marginLeft:'10px', marginTop:'40px', width:'90%', margin:'0 auto'}}>
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
                                <Button onClick={() => handleDelete(blog._id)}>Delete</Button>
                                <Link to={`/update/${blog._id}`}><Button style={{width:'100%', marginTop:'10px'}}>Edit</Button></Link>
                            </Card>
                            
                        </Col>
                    </div>)
                }
                    
            </Row>
        </div>
    );
};
export default AllBlogs;