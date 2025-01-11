import React from 'react';

import { Zap } from 'lucide-react';


const EnergyConsumption = ({ consumption, unit = 'kWh' }) => {
    return (
        <div className="bg-yellow-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
                <Zap className="text-yellow-500" size={24} />
                <h2 className="text-xl font-semibold text-yellow-700">Energy Consumption</h2>
            </div>
            <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-yellow-600">{consumption}</span>
                <span className="text-yellow-600">{unit}</span>
            </div>
        </div>
    );
};

export default EnergyConsumption;