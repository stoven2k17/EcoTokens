import React from 'react';
import { useState } from 'react';
import WaterCard from './components/WaterCard';
import EnergyCard from './components/EnergyCard';
import { loadData } from './functions/storage';

function App() {

  const [water, setWater] = useState(loadData('lastImpact'), water);
  const [energy, setEnergy] = useState(0);

  return (
    <div style={{
      width: '350px',
      minHeight: '400px',
      padding: '16px',
      backgroundColor: 'white',
      border: '1px solid #ccc',
      margin: '20px'
    }}>
      <header>
        <h1 style={{ fontSize: '20px', marginBottom: '16px' }}>EcoTokens</h1>
      </header>
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '16px'
      }}>

        <WaterCard water={water} />
        <EnergyCard energy={energy} />


      </div>
    </div>
  );
}

export default App;