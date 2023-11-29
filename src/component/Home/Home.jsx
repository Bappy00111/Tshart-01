import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tsharts = useLoaderData()
    return (
        <div>
            <div>
                {
                    tsharts.map(tshart => console.log(tshart))
                }
            </div>
        </div>
    );
};

export default Home;