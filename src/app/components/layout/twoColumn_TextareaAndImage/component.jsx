import './component.css';
import Textarea from '../../core/textarea/component'; 
import Image from '../../core/image/component';
import Consumer from '../../../contexts/configContext';

const TwoColumn_headlineAndImage = (props) => {  


    
    return (
        <Consumer>
            {ctx => { 
                let imageColumnClassList = "v-col md-3 lg-4 ";
                imageColumnClassList += ctx[ props.parentComponent ][ 'twoColumn_TextareaAndImage' ][ 'imageOrientation' ];

                const textareaContent = ctx[ props.parentComponent ][ 'twoColumn_TextareaAndImage' ][ 'textarea' ]; 
                const imageContent = ctx[ props.parentComponent ][ 'twoColumn_TextareaAndImage' ][ 'image' ]; 

                return(  
                    <div className="twoColumnHeadlineImage h-row clearfix" >
                        <div className={imageColumnClassList}>
                            <Image content={ imageContent }/>
                        </div>
                        <div className="v-col md-3 lg-4">
                            <Textarea content={ textareaContent }/>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    );  
}

export default TwoColumn_headlineAndImage;