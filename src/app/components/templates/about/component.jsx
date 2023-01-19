import './component.css'; 
import Textarea from '../../core/textarea/component';
import Consumer from '../../../contexts/configContext';

const About = () => {
    return ( 
        <Consumer>
            {ctx => { 
                const textareaContent = ctx[ 'about' ][ 'textarea' ]; 
                return(  
                    <section className="about">
                        <div className="content-lock">
                            <div className="h-row">
                                <div className="v-col has-mg-top-40 has-mg-bottom-50">
                                    <Textarea content={textareaContent} />
                                </div>
                            </div>
                        </div>
                    </section> 
                )
            }}
        </Consumer>
    );  
}

export default About;