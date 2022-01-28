import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import UseAuth from '../../../UseHooks/UseAuth';

const MyBook = () => {
    const [orders, setOrders] = useState([])
    const { user } = UseAuth()

    useEffect(() => {
        fetch(`https://pure-dawn-69415.herokuapp.com/placeorder/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id =>{
        const main = window.confirm("Are YOu Sure")
        if(main){
            fetch(`https://pure-dawn-69415.herokuapp.com/placeorder/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                alert("delete Successfully")
                const remaining = orders.filter(order => order._id !==id)
                setOrders(remaining);
            }
        })
        }
    }


    return (
        <div>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>User Email</th>
                        <th>User Name</th>
                        <th>User Number</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => (
                            <tr>
                                <td>{order.email}</td>
                                <td>{order.userName}</td>
                                <td>{order.userNumber}</td>
                                <td>{order.location}</td>
                                <td>{order.price}</td>
                                <Button onClick={() => handleDelete(order._id)}>Remove</Button>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyBook;