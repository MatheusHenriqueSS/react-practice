import React from "react";

function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.img}/>
            <p>{props.tel}</p>
            <p>{props.mail}</p>
        </div>
    );
}

export default Card;