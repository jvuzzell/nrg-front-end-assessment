import './component.css';

const Headline = (props) => { 

    let buttons = []; 
    let containerClassList = 'textarea '; 
    let headerClassList = '';

    props.content.buttons.map((button, index) => { 
        buttons.push(<a 
                        className={button.classList} 
                        href={button.link.destination} 
                        key={index}
                    >
                        {button.displayText}
                    </a>);
    });

    containerClassList += props.content.classList; 
    headerClassList += props.content.heading.classList;

    return (
        <div className={containerClassList}>
            <h2 className={headerClassList}>{props.content.heading.text}</h2>
            <p className="has-mg-bottom-20">{props.content.textarea}</p> 
            {buttons}
        </div>
    );  
}

export default Headline;