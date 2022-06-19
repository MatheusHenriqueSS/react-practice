import React from "react";
import Emoji from "./Emoji";

function Title(props) {
    return(
        <dt>
            <Emoji emoji={props.emoji} name={props.name}/>
            <span>{props.name}</span>
        </dt>
    );
}

export default Title;