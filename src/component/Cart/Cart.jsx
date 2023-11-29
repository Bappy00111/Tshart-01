import React from 'react';

const Cart = ({cart,handelRemove}) => {
    let message;
    if(cart.length === 0){
       message = <div>please added some product</div>
    }
    return (
        <div>
            <h1>Totla cart : {cart.length}</h1>
            {message}
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


// condisonal rendering 
// 1.used if else to set a variable that will contain an element ,component 
