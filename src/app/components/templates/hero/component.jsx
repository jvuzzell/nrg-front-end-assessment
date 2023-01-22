import './component.css'; 
import TwoColumn_TextareaAndImage from '../../layout/twoColumn_TextareaAndImage/component';

const Hero = () => {
    return ( 
        <section className="background-color_cloud curved-border" data-hud="template/hero">
            <div className="content-lock">
                <TwoColumn_TextareaAndImage parentComponent="hero" data-hud="layout-twoColumn_TextareaAndImage"/>
            </div>
        </section>
    );  
}

export default Hero;