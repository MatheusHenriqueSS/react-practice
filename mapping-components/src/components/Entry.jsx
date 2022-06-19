import React from "react";
import Title from "./Title";
import Meaning from "./Meaning";

function Entry(props) {
    return (<div className="term">
    <Title name={props.name} emoji={props.emoji}/>
    <Meaning meaning={props.meaning}/>
  </div>);
}

export default Entry;