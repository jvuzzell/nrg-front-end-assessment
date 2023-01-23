import { createContext, React } from "react";
import { createRoot } from "react-dom/client";
import '../main.js';

// Static Assets
import '../assets/icons/fontawesome-6.2.0/light/plug-circle-bolt.svg';
import '../assets/icons/graphic/woman-at-cpu.png';
import '../assets/images/man-on-cpu-potatoa.png'; 

// Models
import Content from '../data/content_index-html.json';

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
export const ContentContext = createContext( Content );

root.render(
    <ContentContext.Provider value={Content}>
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