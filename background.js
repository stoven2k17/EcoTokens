import { saveData, loadData } from './backend/storage.js';
import { calculateImpact } from './backend/dataProcessor.js';

const processAndStoreImpact = (tokenCount) => {
    const impact = calculateImpact(tokenCount);
    saveData('lastImpact', impact); // Save calculated impact
    console.log('Impact stored:', impact); // Log the result
    loadData('lastImpact', console.log);
};

// Example usage
processAndStoreImpact(10); // Calculates impact for 10 tokens
