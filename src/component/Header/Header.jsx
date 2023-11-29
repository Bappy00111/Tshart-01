import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            
              <ul className='space-x-10 text-center mt-10'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/order'>Order</Link>
                <Link to='/grandpa'>Grandpa</Link>
                </ul>

        </div>
    );
};

export default Header;