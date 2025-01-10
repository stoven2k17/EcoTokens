import React from 'react';
import { createRoot } from 'react-dom/client';

const Options = () => (
    <div>
        <h1>Options Page</h1>
    </div>
);

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find root element');
const root = createRoot(container);

root.render(<Options />);