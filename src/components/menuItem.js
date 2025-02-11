// "use client" marks this file as a client-side component
'use client';

import React from 'react';

export default function MenuItem({ label, href }) {
    return (
        <li>
            <a
                href={href}
                className="font-semibold text-white text-lg hover:text-black transition-colors duration-300"
            >
                {label}
            </a>
        </li>
    );
}
