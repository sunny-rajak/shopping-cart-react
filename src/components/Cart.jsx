import React, { useState } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart }) => {
    const [quantities, setQuantities] = useState(() =>
        cart.reduce((acc, item) => {
            acc[item.id] = item.quantity || 1; // Initialize with quantity or default to 1
            return acc;
        }, {})
    );

    const handleIncrement = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] + 1, // Increment the quantity for the specific item
        }));
    };

    const handleDecrement = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] > 1 ? prev[id] - 1 : 1, // Decrement but ensure it doesn't go below 1
        }));
    };

    return (
        <div className="cart_section">
            {cart?.map((item) => (
                <div className="cart_box" key={item.id}>
                    <div className="cart_image">
                        <img src={item.img} />
                    </div>
                    <div className="cart_details">
                        <p>Title : {item.title}</p>
                        <p>Author : {item.author}</p>
                    </div>
                    <div className="btn_section">
                        <div className="update_quantity">
                            <button onClick={() => handleIncrement(item.id)}>
                                +
                            </button>
                            <p>{quantities[item.id]}</p>
                            <button onClick={() => handleDecrement(item.id)}>
                                -
                            </button>
                        </div>
                    </div>
                    <div className="update_price">
                        <span>
                            {(item.price * quantities[item.id]).toFixed(2)} Rs
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
