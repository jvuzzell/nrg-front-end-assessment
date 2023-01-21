import './component.css'; 
import ThreeColumn_Cards from '../../layout/threeColumn_Cards/component';
import '../../../assets/icons/fontawesome-6.2.0/light/plug-circle-bolt.svg';

const Pricing = () => {
    return ( 
        <section className="price-tier has-mg-bottom-40">
            <div className="content-lock">
                <ThreeColumn_Cards parentComponent="pricing" cardType="PriceTierCard" />
            </div>
        </section>
    );  
}

export default Pricing;