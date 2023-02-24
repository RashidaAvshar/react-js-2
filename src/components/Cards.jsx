import React from "react";

function Card ({img, title, description, price}){
    return(
        <div className="card">
        <img src={img} alt="product" />
        <p>{title}</p>
        <p>{description}</p>
        <span>{price}</span>
        <span>$</span>
        </div>
    )
}

export default Card;


