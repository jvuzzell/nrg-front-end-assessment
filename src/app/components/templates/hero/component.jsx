import './component.css'; 
import TwoColumn_HeadlineAndImage from '../../layout/twoColumn_HeadlineAndImage/component';

const Hero = () => {
    return ( 
        <section className="background-color_cloud curved-border" data-hud="templates/hero">
            <div className="content-lock">
                <TwoColumn_HeadlineAndImage parentComponent="hero" data-hud="layout/twoColumn_HeadlineAndImage"/>
            </div>
        </section>
    );  
}

export default Hero;