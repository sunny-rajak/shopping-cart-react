import React from "react";
import "../styles/card.css";

const Card = ({ item, handleClick }) => {
    const { title, author, price, img } = item;
    return (
        <div className="cards">
            <div className="image_box">
                <img src={img} alt="image" />
            </div>
            <div className="details">
                <p>Title : {title}</p>
                <p>Author : {author}</p>
                <p>Price : {price} Rs</p>
            </div>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
    );
};

export default Card;
