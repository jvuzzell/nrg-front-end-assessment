import './component.css'; 
import Textarea from '../../core/textarea/component';
import { ContentContext } from "../../../pages/index.js";
import { useContext } from "react";

const About = () => {
    const ctx = useContext( ContentContext ); 
    const textareaContent = ctx[ 'about' ][ 'textarea' ];
    
    return(  
        <section className="about"  data-hud="template/about">
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