import React from 'react';

export default function card({ children }) {
    return(
        <div className="bg-white text-gray-800 rounded-lg shadow-lg w-full min-w-2xl max-w-3xl p-8">
            {children}
        </div>
    )
}