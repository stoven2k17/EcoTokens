import React from 'react';
import WaterCard from './components/WaterCard';
import EnergyCard from './components/EnergyCard';

function App() {
  return (
    <div style={{
      width: '350px',  // Standard extension width
      minHeight: '400px',
      padding: '16px',
      backgroundColor: 'white',
      // During development, add a border to visualize popup boundaries
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

        <WaterCard />
        <EnergyCard />


      </div>
    </div>
  );
}

export default App;