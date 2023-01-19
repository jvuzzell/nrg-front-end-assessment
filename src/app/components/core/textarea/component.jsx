import './component.css';

const Headline = (props) => { 

    let buttons = []; 

    props.content.buttons.map((button, index) => { 
        buttons.push(<a 
                        className={button.classList} 
                        href={button.link.destination} 
                        key={index}
                    >
                        {button.displayText}
                    </a>);
    });

    return (
        <div className="textarea vertical-align">
            <h1 className="light-weight">{props.content.heading}</h1>
            <p className="has-mg-bottom-20">{props.content.textarea}</p> 
            {buttons}
        </div>
    );  
}

export default Headline;