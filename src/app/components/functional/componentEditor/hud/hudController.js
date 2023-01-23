import { Flyouts } from 'flyout-overlay-js/flyout';

export const HudController = (function() {

    const Constructor = function( markup, setMarkup ) {
        this.markup = markup; 
        this.setMarkup = setMarkup;  
        this.dispatch.init();
    }

    const dispatch = {
        
        init : function() {

            let hudNodeList = document.querySelectorAll( '[data-hud]' ); 
            this.addHoverEffect( hudNodeList );
            this.attachControls( hudNodeList ); 
            this.initHudToggle();

        },  
 
        initHudToggle : function() {
            
            const hudToggle = this.toggleHudMode; 

            document.getElementById( 'hudToggle' ).addEventListener('click', event => {
                event.target.classList.toggle('hud-active'); 
                hudToggle();
            });

        }, 

        addHoverEffect : function( hudNodeList ) {  

            const showHud = this.showHud; 
            const hideHud = this.hideHud;

            const hudMouseIn = function( event ) {  
                showHud( event.target ); 
            } 

            const hudMouseOut = function( event ) {  
                hideHud( event.target ); 
            } 

            for( let i = 0; i < hudNodeList.length; i++ ) { 
                hudNodeList[ i ].addEventListener( 'mouseenter', hudMouseIn );
                hudNodeList[ i ].addEventListener( 'mouseleave', hudMouseOut );
            }

        },

        showHud : function( hudElem ) { 

            hudElem.classList.add( 'hud-visible' ); 
            HudController.dispatch.hideParentHuds( hudElem );

        },

        hideHud : function( hudElem ) { 

            hudElem.classList.remove( 'hud-visible' );

        }, 

        hideParentHuds : function( hudElem ) {

            const parentElem = hudElem.parentElement; 
            if ( parentElem === null || parentElem === undefined ) return; 

            if( parentElem.getAttribute( 'data-hud' ) !== null ) { 
                this.hideHud( parentElem );
            }

            this.hideParentHuds( parentElem );

        },

        attachControls : function( hudNodeList ) { 

            for( let i = 0; i < hudNodeList.length; i++ ) {  
                this.prependControls( hudNodeList[i], this.generateControls( hudNodeList[i] ) );
            } 

        },  

        prependControls : function( hudNode, hudControlsObj ) { 

            const controlContainer = document.createElement( 'div' ); 
            controlContainer.classList.add( 'hud-controls' );
            
            for( let control in hudControlsObj ) { 
                controlContainer.appendChild( hudControlsObj[ control ][ 'html' ] );
            }
             
            hudNode.prepend( controlContainer );

        },

        generateControls : function( hudNode ) { 

            const hudKey = hudNode.dataset.hud; 
            const controlList = {
                'copy' : { 
                    html: document.createElement( 'button' ), 
                    displayName : 'copy',  
                    useFlyout : true, 
                    flyoutConfig : {
                        triggerEvent : 'click',
                        target : 'copyCodeControls'
                    }
                }, 
                // 'editContent' : { html: document.createElement( 'button' ), displayName : 'edit content' }
            } 

            const liveControls = {};

            for( let control in controlList ) {
                
                let controlElement = controlList[ control ];
                controlElement.html.setAttribute( 'data-hudkey', hudKey ); 
                
                if( controlElement.useFlyout ) { 
                    controlElement.html.setAttribute( 'data-flyout-trigger', controlElement.flyoutConfig.triggerEvent ); 
                    controlElement.html.setAttribute( 'data-flyout-target', controlElement.flyoutConfig.target );  
                }

                controlElement.html.innerText = controlElement.displayName; 
                
                liveControls[ control ] = controlElement;

            }

            return liveControls;

        },

        toggleHudMode : function() { 
            
            const currState = document.querySelector('body').dataset.componentHudActive; 

            if( currState === "true" ) {
                document.querySelector('body').setAttribute( 'data-component-hud-active', "false" ); 
            } else { 
                document.querySelector('body').setAttribute( 'data-component-hud-active', "true" ); 
            }

        },

        displayControls : function( hudControlElem ) { 

            const flyoutId = hudControlElem.dataset.flyoutTarget; 

            switch( flyoutId ) {
                case 'copyCodeControls' : 
                    HudController.setActiveMarkup( hudControlElem.dataset.hudkey );
                    break; 
            }
            
            Flyouts.getFlyout( flyoutId ).toggle();  
            
        } 

    }

    return {
        dispatch : dispatch, 
        init : Constructor, 
        getMarkup : (function() { console.log(this); return this.markup }),
        setActiveMarkup : (function( id) { this.setMarkup({ data : this.markup.data, activeMarkup : id }) })
    }
    
})();