import './component.css';
import PriceTierCard from '../../core/priceTierCard/component';
import ContentContext from '../../../context/contentContext';
import { useContext } from "react";

const registeredCards = { 
    PriceTierCard: PriceTierCard
}

const ThreeColumn_Cards = (props) => {  
    const { content } = useContext( ContentContext ); 
    const cardContent = content[ props.parentComponent ][ 'threeColumn_Cards' ][ 'cards' ];
                
    let cards = [];
    const CardType = registeredCards[ props.cardType ]; 

    cardContent.map((card, index ) => {
        cards.push(
            <CardType content={card} key={index} />
        )
    });

    return (
        <div className="threeColumn_card-container display-flex"  data-hud="layout/threeColumn_Cards">
            {cards}
        </div>
    );  
}

export default ThreeColumn_Cards;