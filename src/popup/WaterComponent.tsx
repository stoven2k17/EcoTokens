import React from 'react';
import { Droplet } from 'lucide-react';

const WaterComponent = ({ consumption, unit = 'gallons' }) => {
    return (
        <div className="bg-blue-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
                <Droplet className="text-blue-500" size={24} />
                <h2 className="text-xl font-semibold text-blue-700">Water Consumption</h2>
            </div>
            <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-blue-600">{consumption}</span>
                <span className="text-blue-600">{unit}</span>
            </div>
        </div>
    );
};
export default WaterComponent;