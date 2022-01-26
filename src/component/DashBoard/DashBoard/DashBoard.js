import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import NavArea from '../../Home/NavArea/NavArea';
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div>
            <NavArea></NavArea>
            <div className='dashboard'>
                <Link to='/dashboard'>All Blogs</Link>
                <Link to='/dashboard/addadmin'>Add Admin</Link>
                <Link to='/dashboard/addblogs'>Add Blogs</Link>
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'50px'}}>
            <div>
            <Outlet />
            </div>
            </div>
        </div>
    );
};

export default DashBoard;