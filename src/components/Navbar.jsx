import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/navbar.css";

const Navbar = ({ size, setShow }) => {
    return (
        <nav>
            <span className="app_logo" onClick={() => setShow(true)}>
                Book Shop
            </span>
            <div className="cart" onClick={() => setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </nav>
    );
};

export default Navbar;
