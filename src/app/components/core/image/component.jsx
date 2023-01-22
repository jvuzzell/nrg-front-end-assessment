import React from "react";
import './component.css';

const Image = (props) => { 
    
    return (
        <img src={props.content.src} data-hud="core/image"/>
    );  
}

export default Image; 