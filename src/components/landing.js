import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import SocialIcon from './socialIcon'; // Import the SocialIcon component
import Title from './title';
import Subtitle from './subtitle';
import Card from './card';

// Main Landing Component
export default function Landing() {
    return (
        <Card>
            {/* Header Box: Name and Social Media Links */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 gap-4">
                {/* Title aligned with icons */}
                <div className="flex items-center top-4 pt-2">
                    <Title>Software Developer</Title>
                </div>
                <div className="flex gap-4 justify-center sm:justify-end w-full sm:w-auto">
                    <SocialIcon 
                        href="mailto:nunezjorge2003@gmail.com" 
                        icon={<FaEnvelope size={24} />} 
                        bgColor="bg-blue-500" 
                        hoverColor="bg-blue-600" 
                    />
                    <SocialIcon 
                        href="https://www.linkedin.com/in/jorge-núñez-paucar-a60148272/" 
                        icon={<FaLinkedin size={24} />} 
                        bgColor="bg-blue-700" 
                        hoverColor="bg-blue-800" 
                    />
                    <SocialIcon 
                        href="https://github.com/jphants" 
                        icon={<FaGithub size={24} />} 
                        bgColor="bg-gray-800" 
                        hoverColor="bg-gray-900" 
                    />
                </div>
            </div>

            <Subtitle>Jorge Núñez Paucar</Subtitle>

            {/* About Section */}
            <p className="mt-2 text-justify mx-auto px-3">
                I'm a Computer Science student at Universidad Católica San Pablo with
                experience in software development, machine learning, and programming
                instruction.  
                I’ve been part of the ACM chapter and have organized and participated
                in events like the Global Game Jam and other university activities.  
                I collaborate well in teams, communicate clearly, and adapt quickly
                to new challenges.
            </p>
        </Card>
    );
}
