import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Layout;