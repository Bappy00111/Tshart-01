import React from 'react';

const Cosin = ({children}) => {
    return (
        <div className='border border-orange-500 p-5'>
            <h2 className='font-bold'>Cosin</h2>
            <p><small>{children}</small></p>
        </div>
    );
};

export default Cosin;