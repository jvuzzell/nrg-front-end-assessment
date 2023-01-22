import { useEffect } from 'react';
import './component.css'; 
import { HudController } from './hudController';

const ComponentHud = function( props ) {
 
    useEffect(function() {
        HudController.dispatch.init();
    });

}  

export default ComponentHud;
