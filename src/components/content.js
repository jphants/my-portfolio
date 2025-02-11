import React from 'react';

export default function Content({ children }) {
    return (
        <div className="w-full min-h-screen h-full flex flex-col items-center justify-start p-4 space-y-4 bg-gradient-to-r from-blue-500 to-purple-600">
            {children}
        </div>
    );
}
