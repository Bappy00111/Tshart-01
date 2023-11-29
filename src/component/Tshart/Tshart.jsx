import React from 'react';

const Tshart = ({ tshart,handelAddedCart,handelRemove }) => {
    // console.log(tshart);
    const { gender, index, name, picture, price, _id } = tshart;
    return (
        <div className="card w-full  bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
                <img  src={picture} alt="Shoes" className="rounded-xl h-[200px] w-[300px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price:${price}</p>
                <div className="card-actions">
                    <button onClick={()=>handelAddedCart(tshart)} className="btn btn-primary">Buy Now</button>
                </div>
                {/* <div className="card-actions">
                    <button onClick={()=>handelRemove(_id)} className="btn btn-primary">Delet NOW</button>
                </div> */}
            </div>
        </div>
    );
};

export default Tshart;