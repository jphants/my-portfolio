import React from 'react';

// SocialIcon Component
const SocialIcon = ({ href, icon, bgColor, hoverColor }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 ${bgColor} text-white p-3 rounded-full hover:${hoverColor} hover:scale-150 transition duration-300 ease-in-out`}
        >
            {icon}
        </a>
    );
};

export default SocialIcon;
