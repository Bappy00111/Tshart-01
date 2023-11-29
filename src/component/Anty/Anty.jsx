import React from 'react';
import Cosin from '../Cosin/Cosin';

const Anty = () => {
    return (
        <div className='border inline-block border-red-500 p-5'>
            <h1>This is Anty</h1>
            <section className='flex space-x-5'>
                <Cosin>Abir</Cosin>
                <Cosin>Niber</Cosin>
            </section>
        </div>
    );
};

export default Anty;