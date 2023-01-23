import './component.css'; 
import Textarea from '../../core/textarea/component';
import ContentContext from '../../../context/contentContext';
import { useContext } from "react";

const About = () => {
    const { content } = useContext( ContentContext ); 
    const textareaContent = content[ 'about' ][ 'textarea' ];
    
    return(  
        <section className="about"  data-hud="templates/about">
            <div className="content-lock">
                <div className="h-row">
                    <div className="v-col has-mg-top-40 has-mg-bottom-50">
                        <Textarea content={textareaContent} />
                    </div>
                </div>
            </div>
        </section> 
    );
}

export default About;