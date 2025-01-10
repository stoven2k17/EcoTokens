import React from "react"


export default function WaterCard( {water}) {

    return (

        <div style={{
            padding: '12px',
            backgroundColor: '#f0fdf4',
            borderRadius: '8px'
          }}>
            <div>Water Usage</div>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{water} mL</div>
          </div>
    )
}