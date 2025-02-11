import React from 'react';

export default function Footer() {
    return (
        <div className="bg-gray-800 text-white py-6">
            <div className="text-center">
                {/* Link to GitHub or another repository */}
                Feel free to check the source code{' '}
                <a 
                    href="https://github.com/yourusername/your-repo" 
                    className="text-blue-400 hover:underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    here
                </a>
            </div>
        </div>
    );
}
