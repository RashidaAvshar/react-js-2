import React from "react";

function Card (props){
    return(
        <div className="card">
        <img src={props.img} alt="product" />
        <p>{props.title}</p>
        <p>{props.description}</p>
        <span>{props.price}</span>
        <span>$</span>
        </div>
    )
}

export default Card;


