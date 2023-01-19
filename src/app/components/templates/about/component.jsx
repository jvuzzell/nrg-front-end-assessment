import './component.css'; 
import Textarea from '../../core/textarea/component';
import Consumer from '../../../contexts/configContext';

const Hero = () => {
    return ( 
        <Consumer>
            {ctx => { 
                const textareaContent = ctx[ 'about' ][ 'textarea' ]; 
                return(  
                    <section class="about">
                        <div className="content-lock">
                            <div class="h-row">
                                <div class="v-col has-mg-top-40">
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

export default Hero;