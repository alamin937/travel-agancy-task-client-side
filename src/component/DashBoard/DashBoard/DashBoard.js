import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseAuth from '../../../UseHooks/UseAuth';
import NavArea from '../../Home/NavArea/NavArea';
import './DashBoard.css'

const DashBoard = () => {
    const { admin } = UseAuth()
    return (
        <div>
            <NavArea></NavArea>
            <div className='dashboard'>
                <Link style={{marginBottom:'25px'}} to='/dashboard'>My Booking</Link>
                {admin &&
                    <div className='dash'>
                        <Link to='/dashboard/allblog'>All Blogs</Link>
                        <Link to='/dashboard/addadmin'>Add Admin</Link>
                        <Link to='/dashboard/addblogs'>Add Blogs</Link>
                    </div>
                }
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;