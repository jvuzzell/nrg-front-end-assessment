import './component.css'; 
import ThreeColumn_Cards from '../../layout/threeColumn_Cards/component';

const Pricing = () => {
    return ( 
        <section className="price-tier has-mg-bottom-40" data-hud="templates/pricing">
            <div className="content-lock">
                <ThreeColumn_Cards parentComponent="pricing" cardType="PriceTierCard" />
            </div>
        </section>
    );  
}

export default Pricing;