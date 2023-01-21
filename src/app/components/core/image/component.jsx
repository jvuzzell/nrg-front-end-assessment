import React from "react";
import './component.css';

const Image = (props) => { 
    
    return (
        <img src={props.content.src}/>
    );  
}

export default Image; 