import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Anty from '../Anty/Anty';
import Uncel from '../Uncel/Uncel';


export const RingContaxt = createContext('gold')
export const MoneyContax = createContext(0);
const Grandpa = () => {
    const [money,setMoney] = useState(0)

    return (
        <div className='text-center mt-10 border-2 border-amber-500 p-10'>
            <h2>This is grandpa </h2>
            <p>has money : {money}</p>
            <MoneyContax.Provider value={[money,setMoney]}>
                <RingContaxt.Provider value='golden ring'>
                    <div className='space-x-5 mt-5'>
                        <Father></Father>
                        <Anty></Anty>
                        <Uncel></Uncel>
                    </div>
                </RingContaxt.Provider>
            </MoneyContax.Provider>
        </div>
    );
};

export default Grandpa;