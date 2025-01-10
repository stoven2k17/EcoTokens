import React from 'react';

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
        <div style={{
          padding: '12px',
          backgroundColor: '#f0f9ff',
          borderRadius: '8px'
        }}>
          <div>Energy Used</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>0.015 kWh</div>
        </div>

        <div style={{
          padding: '12px',
          backgroundColor: '#f0fdf4',
          borderRadius: '8px'
        }}>
          <div>Water Usage</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>5.4 mL</div>
        </div>
      </div>
    </div>
  );
}

export default App;