import './component.css';

const Headline = (props) => {
    return (
        <div className="textarea vertical-align">
            <h1 className="light-weight">{props.content.heading}</h1>
            <p className="has-mg-bottom-20">{props.content.textarea}</p>
            <a 
                className={props.content.buttons[0].classList} 
                href={props.content.buttons[0].link.destination}
            >
                {props.content.buttons[0].displayText}
            </a>
        </div>
    );  
}

export default Headline;