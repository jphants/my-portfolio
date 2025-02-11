import React from 'react';

export default function Subtitle({ children }) {
    return (
        <h1 className="text-2xl font-bold text-start text-gray-800 mb-6">
            {children}
        </h1>
    );
}
