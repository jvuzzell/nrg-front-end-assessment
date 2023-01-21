import './component.css'; 
import TwoColumn_TextareaAndImage from '../../layout/twoColumn_TextareaAndImage/component';
import '../../../assets/images/man-on-cpu-potatoa.png'; 

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