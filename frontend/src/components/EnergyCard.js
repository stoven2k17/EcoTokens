import React from "react"



export default function EnergyCard( {energy}) {


    return (
        <div>
        <div style={{
          padding: '12px',
          backgroundColor: '#f0f9ff',
          borderRadius: '8px'
        }}>
          <div>Energy Used</div>
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{energy} kWh</div>
        </div>
        </div>

    );

};
