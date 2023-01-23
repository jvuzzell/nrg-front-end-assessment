import 'flyout-overlay-js/flyout.css';

import { initFlyouts } from 'flyout-overlay-js/flyout';
import { useEffect } from 'react';

const FlyoutContainers = function( props ) {
 
    useEffect(function() {
        initFlyouts();
    }, []);

    return (
        <div className="flyout-containers"> 
            {props.children}
        </div>
    );

} 

export default FlyoutContainers;