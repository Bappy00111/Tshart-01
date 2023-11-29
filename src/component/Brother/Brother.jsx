import React, { useContext } from 'react';
import { RingContaxt } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContaxt)
    return (
        <div className='border inline-block border-red-500 p-5'>
            <h1>Brother</h1>
            <p>{ring}</p>
        </div>
    );
};

export default Brother;