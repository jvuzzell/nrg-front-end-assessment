import './component.css'; 
import TwoColumn_TextareaAndImage from '../../layout/twoColumn_TextareaAndImage/component';

const Process = () => {
    return ( 
        <section className='process'>
            <div className="content-lock">
                <TwoColumn_TextareaAndImage parentComponent="process"/>
            </div>
        </section>
    );  
}

export default Process;