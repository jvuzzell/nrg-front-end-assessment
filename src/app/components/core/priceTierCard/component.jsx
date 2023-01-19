import React from "react";
import './component.css'; 
import '../../../assets/icons/fontawesome-6.2.0/light/plug-circle-bolt.svg';

const PriceTierCard = (props) => { 
    
    let benefits = []; 

    props.content.benefits.map((benefit, key) => {
        benefits.push(<li key={key}>{benefit}</li>);
    });

    return (
        <div className="card card_price-tier">
            <div className="image-container background-color_cloud has-mg-bottom-40">
                <img src="../../images/plug-circle-bolt.svg"/>
            </div>
            <h3 className="md-heading semibold color_deep-sea">{props.content.name}</h3>
            <ul>
                {benefits}
            </ul> 
            <p className="x-lg-heading light-weight color_deep-sea">{props.content.price}</p>
            <a className="button background-color_bright-orange no-underline" 
                href={props.content.offer.link}
            >
                {props.content.offer.displayText}
            </a>
        </div>
    );  
}

export default PriceTierCard; 