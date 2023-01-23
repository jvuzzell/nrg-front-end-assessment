import './component.css'; 
import TwoColumn_HeadlineAndImage from '../../layout/twoColumn_HeadlineAndImage/component';

const Process = () => {
    return ( 
        <section className='process' data-hud="templates/process">
            <div className="content-lock">
                <TwoColumn_HeadlineAndImage parentComponent="process"/>
            </div>
        </section>
    );  
}

export default Process;