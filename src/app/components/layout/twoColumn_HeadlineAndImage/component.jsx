import './component.css';
import Textarea from '../../core/textarea/component'; 
import Image from '../../core/image/component';
import ContentContext from '../../../context/contentContext';
import { useContext } from "react";

const TwoColumn_HeadlineAndImage = (props) => {    
    const { content } = useContext( ContentContext ); 
    
    let imageColumnClassList = "v-col md-3 lg-4 left ";
    imageColumnClassList += content[ props.parentComponent ][ 'twoColumn_TextareaAndImage' ][ 'imageOrientation' ];

    const textareaContent = content[ props.parentComponent ][ 'twoColumn_TextareaAndImage' ][ 'textarea' ]; 
    const imageContent = content[ props.parentComponent ][ 'twoColumn_TextareaAndImage' ][ 'image' ]; 

    return (
        <div className="twoColumnHeadlineImage h-row clearfix" data-hud="layout/twoColumn_HeadlineAndImage">
            <div className={imageColumnClassList}>
                <Image content={ imageContent }/>
            </div>
            <div className="v-col md-3 lg-4 right">
                <Textarea content={ textareaContent }/>
            </div>
        </div>
    );  
}

export default TwoColumn_HeadlineAndImage;