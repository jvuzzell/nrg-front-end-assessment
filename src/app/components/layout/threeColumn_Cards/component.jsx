import './component.css';
import PriceTierCard from '../../core/priceTierCard/component';
import Consumer from '../../../contexts/contentContext';
 
const registeredCards = { 
    PriceTierCard: PriceTierCard
}

const ThreeColumn_Cards = (props) => {  
    return (
        <Consumer>
            {ctx => { 
                const cardContent = ctx[ props.parentComponent ][ 'threeColumn_Cards' ][ 'cards' ];
                
                let cards = [];
                const CardType = registeredCards[ props.cardType ]; 
    
                cardContent.map((card, index ) => {
                    cards.push(
                        <CardType content={card} key={index} />
                    )
                });

                return(  
                    <div className="threeColumn_card-container display-flex" >
                        {cards}
                    </div>
                )
            }}
        </Consumer>
    );  
}

export default ThreeColumn_Cards;