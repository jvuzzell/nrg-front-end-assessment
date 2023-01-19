import { React, createContext } from "react";
import { createRoot } from "react-dom/client";
import '../main.js';
import Content from '../data/content_index-html.json';
import Hero from "../components/hero/component.jsx";
import { ConfigProvider } from '../contexts/configContext';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <div className="main-content">
        <ConfigProvider value={Content}>
            <Hero />    
        </ConfigProvider>
    </div>
);