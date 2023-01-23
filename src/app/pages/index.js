import { createContext, React, useState } from "react";
import { createRoot } from "react-dom/client";
import '../main.js';

// Static Assets
import '../assets/icons/fontawesome-6.2.0/light/plug-circle-bolt.svg';
import '../assets/icons/graphic/woman-at-cpu.png';
import '../assets/images/man-on-cpu-potatoa.png'; 

// Models
import Content from '../data/content_index-html.json';

// Context
import ContentContext from "../context/contentContext.js";

// View Components
import ComponentHud from '../components/functional/componentEditor/hud/component';
import Hero from "../components/templates/hero/component.jsx";
import About from "../components/templates/about/component.jsx"; 
import Process from "../components/templates/process/component.jsx"; 
import Pricing from "../components/templates/pricing/component.jsx";
import FlyoutContainers from "../components/templates/flyoutContainers/component.jsx";
import CopyCodeFlyout from "../components/core/copyCodeFlyout/component.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
 
const App = () => {
    const [content, setContent] = useState( Content ); 
    const value = { content, setContent };

    return (
        <ContentContext.Provider value={value}>
            <div className="main-content">
                <Hero />    
                <About />
                <Process /> 
                <Pricing /> 
            </div>   
            <ComponentHud />  
            <FlyoutContainers>  
                <CopyCodeFlyout />
            </FlyoutContainers>
        </ContentContext.Provider>
    );
};

root.render( <App /> );
