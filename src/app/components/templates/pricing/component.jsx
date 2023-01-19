import './component.css'; 
import ThreeColumn_Cards from '../../layout/threeColumn_Cards/component';

const Pricing = () => {
    return ( 
        <section className="price-tier has-mg-bottom-40">
            <div className="content-lock">
                <ThreeColumn_Cards parentComponent="pricing"/>
            </div>
        </section>
    );  
}

export default Pricing;