import React from "react";
import list from "../list";
import Card from "./Card";

const Shop = ({ handleClick }) => {
    return (
        <section>
            {list.map((item) => {
                return (
                    <Card handleClick={handleClick} item={item} key={item.id} />
                );
            })}
        </section>
    );
};

export default Shop;
