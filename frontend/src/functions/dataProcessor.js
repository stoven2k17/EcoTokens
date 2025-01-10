import { ENERGY_PER_TOKEN, WATER_PER_TOKEN } from '../frontend/src/functions/constants.js';

export const calculateImpact = (tokenCount) => {
    return {
        energy: tokenCount * ENERGY_PER_TOKEN,
        water: tokenCount * WATER_PER_TOKEN,
    };
};
