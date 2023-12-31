import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshart from '../Tshart/Tshart';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tsharts = useLoaderData()
    const [cart, setCart] = useState([])
    // console.log(cart);

    const handelAddedCart = (tshart) => {
        const exists = cart.find(ts => ts._id === tshart._id)
        if (exists) {
            toast.error("This product alredy added")
        } else {
            const newCart = [...cart, tshart]
            setCart(newCart)
            toast.success('Successfully product!')
        }

    }

    const handelRemove = (id) => {
        console.log(id);
        const reamingData = cart.filter(p => p._id !== id)
        setCart(reamingData);

    }

    return (
        <div className='grid md:grid-cols-[3fr,1fr] mt-10 gap-5 px-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tsharts.map(tshart => <Tshart
                        key={tshart._id}
                        tshart={tshart}
                        handelAddedCart={handelAddedCart}
                    ></Tshart>)
                }
            </div>
            <div>
                <Cart
                    cart={cart}
                    handelRemove={handelRemove}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;