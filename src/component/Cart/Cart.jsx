import React from 'react';

const Cart = ({cart,handelRemove}) => {
    return (
        <div>
            <h1>Totla cart : {cart.length}</h1>
            {
                cart.map( c =>
                     <p key={c._id}>
                         {c.name}
                           <button onClick={ ()=>handelRemove(c._id)}> X </button></p>)
            }
        </div>
    );
};

export default Cart;