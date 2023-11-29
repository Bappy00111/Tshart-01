import React, { useContext } from 'react';
import { MoneyContax } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContax)
    return (
        <div className='border inline-block border-red-500 p-5'>
            <h1>Sister : {money}</h1>
        </div>
    );
};

export default Sister;