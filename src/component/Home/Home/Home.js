import React from 'react';
import ShowBlogs from '../../ShowBlogs/ShowBlogs';
import Banner from '../Banner/Banner';
import NavArea from '../NavArea/NavArea';

const Home = () => {
    return (
        <div>
            <NavArea></NavArea>
            <Banner></Banner>
            <ShowBlogs></ShowBlogs>
        </div>
    );
};

export default Home;