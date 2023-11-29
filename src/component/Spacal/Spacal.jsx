import React, { useContext } from 'react';
import { RingContaxt } from '../Grandpa/Grandpa';

const Spacal = () => {
    const anti = useContext(RingContaxt)
    return (
        <div className='border inline-block border-red-500 p-5'>
            <h1>spacal</h1>
            <p>Ring:<span>{anti}</span> </p>
        </div>
    );
};

export default Spacal;