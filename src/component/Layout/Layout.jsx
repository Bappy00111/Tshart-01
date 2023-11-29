import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;