"use client"; // Required for client-side React hooks

import React, { useState } from "react";
import MenuItem from "./menuItem"; // Import MenuItem component
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

    return (
        <div className="bg-gray-800 p-4 text-center font-sans">
            {/* Container for logo and menu items */}
            <div className="flex justify-start items-center gap-4">
                
                {/* Navigation Menu (collapsible on small screens) */}
                <nav className={`${menuOpen ? "block" : "hidden"} sm:block`}>
                    <ul className="list-none p-0 m-0 flex flex-col sm:flex-row gap-4 sm:gap-8 bg-gray-800 sm:bg-transparent absolute sm:static top-16 left-0 w-full sm:w-auto text-left">
                        <MenuItem label="Home" href="#home" />
                        <MenuItem label="About" href="#about" />
                        <MenuItem label="Skills" href="#skills" />
                        <MenuItem label="Portfolio" href="#portfolio" />
                        <MenuItem label="Projects" href="#projects" />
                        <MenuItem label="Contact" href="#contact" />
                    </ul>
                </nav>

                {/* Hamburger Menu Button (only visible on small screens) */}
                <button 
                    className="text-white text-2xl sm:hidden" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>
    );
}
