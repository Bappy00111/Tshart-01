import React, { useContext } from 'react';
import Cosin from '../Cosin/Cosin';
import { MoneyContax } from '../Grandpa/Grandpa';

const Uncel = () => {
    const [money,setMoney]  = useContext(MoneyContax);
    return (
        <div className='border inline-block border-red-500 p-5'>
            <h1> Uncel</h1>
            <p>Grandpa Money : {money}</p>
            <button onClick={()=>{setMoney(money + 1000)}} className='btn btn-primary'>send 1000taka</button>
            <section className='flex space-x-5'>
                <Cosin>Nabel</Cosin>
                <Cosin>Nabela</Cosin>
            </section>
        </div>
    );
};

export default Uncel;