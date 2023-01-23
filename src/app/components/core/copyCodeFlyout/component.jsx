import './component.css';
import { HudController } from "../../functional/componentEditor/hud/hudController";
import { useContext } from "react";
import MarkupContext from "../../../context/markupContext";

const CopyCodeFlyout = function() {
 
    const { markup } = useContext( MarkupContext );  

    const jsxMarkup = markup.data[ markup.activeMarkup ][ 'jsx' ];
    const cssMarkup = markup.data[ markup.activeMarkup ][ 'css' ];
    const htmlMarkup = decodeEntities( markup.data[ markup.activeMarkup ][ 'html' ] );

    return(
        <div className="flyout-container" data-flyout-container="collapsed" data-flyout-target="copyCodeControls" data-flyout-override="true" data-flyout-callback="notifyHubController">
            <div className="h-row">
                <div className="v-col sm-2 md-3 lg-4">
                    <h2 className="color_white">Component Markup</h2>
                    <h3 className="color_white md-heading">"{markup.activeMarkup}"</h3>
                </div>
                <div className="v-col sm-2 md-3 lg-4 text-right ">
                    <button className="color_white" type="button btn-no-background close" data-close-flyout="copyCodeControls">
                        <strong>&times;</strong> Close
                    </button>  
                </div>
            </div>
            <hr className="background-color_cloud has-mg-bottom-30"/>
            <div className="h-row">
                <div className="v-col">
                    <form>
                        <h3 class="color_white md-heading bold">JSX</h3> 
                        <textarea className="has-mg-bottom-20" id="componentJsxCode" value={jsxMarkup} readOnly></textarea>
                        <h3 class="color_white md-heading bold">CSS</h3>
                        <textarea className="has-mg-bottom-20" id="componentCssCode" value={cssMarkup} readOnly></textarea> 
                        <h3 class="color_white md-heading bold">Expected HTML</h3>
                        <textarea className="has-mg-bottom-20" id="componentHtmlCode" value={htmlMarkup} readOnly></textarea>
                    </form>
                </div>
            </div>
        </div>
    );

} 

window.notifyHubController = function( event ) {
    HudController.dispatch.displayControls( event.target );
}

var decodeEntities = (function() {
    // this prevents any overhead from creating the object each time
    var element = document.createElement('div');
  
    function decodeHTMLEntities (str) {
      if(str && typeof str === 'string') {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
      }
  
      return str;
    }
  
    return decodeHTMLEntities;
  })();

export default CopyCodeFlyout; 