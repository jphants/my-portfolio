import React from 'react';
import projectData from '../data/projects.json'

const Projects = () => {
    return (
        <ul>
            {projectData.map(project => (
                <li key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default Projects;
