export const HudController = (function() {
    
    const dispatch = {
        
        init : function() {

            let hudNodeList = document.querySelectorAll( '[data-hud]' ); 
            
            this.addHoverEffect( hudNodeList );
            this.attachControls( hudNodeList );
            this.toggleHudMode(); 
            
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
 
        yelp : function( event ) { 

            console.error( event.target);

        }, 

        generateControls : function( hudNode ) { 

            const hudKey = hudNode.dataset.hud; 
            const controlList = {
                'copy' : { html: document.createElement( 'button' ), displayName : 'copy' }, 
                // 'editContent' : { html: document.createElement( 'button' ), displayName : 'edit content' }
            } 

            const liveControls = {};

            for( let control in controlList ) {
                
                let controlElement = controlList[ control ];
                controlElement.html.setAttribute( 'data-hudkey', hudKey );
                controlElement.html.innerText = controlElement.displayName; 

                liveControls[ control ] = controlElement;
                
                controlElement.html.addEventListener( 'click', this.yelp );

            }

            return liveControls;

        },

        toggleHudMode : function() { 
            
            const activeState = ( document.querySelector('body').dataset.componentHudActive === undefined ) ? false : document.querySelector('body').dataset.componentHudActive; 
            document.querySelector('body').setAttribute( 'data-component-hud-active', !activeState ); 

        } 

    }

    return {
        dispatch : dispatch
    }
    
})();