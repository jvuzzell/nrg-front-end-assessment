import { React, createContext } from "react";
import { createRoot } from "react-dom/client";
import '../main.js';
import { ConfigProvider } from '../contexts/configContext';

import Content from '../data/content_index-html.json';
import Hero from "../components/templates/hero/component.jsx";
import About from "../components/templates/about/component.jsx"; 
import Process from "../components/templates/process/component.jsx"; 
import Pricing from "../components/templates/pricing/component.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <div className="main-content">
        <ConfigProvider value={Content}>
            <Hero />    
            <About />
            <Process /> 
            <Pricing />
        </ConfigProvider>
    </div>
);