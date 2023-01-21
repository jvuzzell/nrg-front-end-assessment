import './component.css'; 
import TwoColumn_TextareaAndImage from '../../layout/twoColumn_TextareaAndImage/component';

const Hero = () => {
    return ( 
        <section className="background-color_cloud curved-border">
            <div className="content-lock">
                <TwoColumn_TextareaAndImage parentComponent="hero"/>
            </div>
        </section>
    );  
}

export default Hero;