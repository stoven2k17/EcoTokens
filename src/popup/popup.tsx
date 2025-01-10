import React from 'react';
import { createRoot } from 'react-dom/client';
import "../assets/tailwind.css";
const App = () => (
    <div>
        <h1>steven is daddys world</h1>
    </div>
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);