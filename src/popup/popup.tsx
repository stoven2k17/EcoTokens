import React from 'react';
import { createRoot } from 'react-dom/client';
import "../assets/tailwind.css";
import EnergyConsumption from './EnergyComponent';
import WaterComponent from './WaterComponent';

const App = () => (
    <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <EnergyConsumption consumption={250} />
                <WaterComponent consumption={1000} />
            </div>
        </div>
    </div>
);


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);