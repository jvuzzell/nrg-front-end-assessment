import './component.css'; 

import { useContext, useEffect } from 'react';
import { HudController } from './hudController';
import MarkupContext from '../../../../context/markupContext';

// HUD = heads-up display
const ComponentHud = function( props ) {

    const { markup, setMarkup } = useContext( MarkupContext );

    useEffect(function() { 
        HudController.init( markup, setMarkup );
    }, []); 

}  

export default ComponentHud;
