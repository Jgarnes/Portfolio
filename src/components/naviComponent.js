import React from 'react';

function Navigation() {
    return (
    <React.Fragment>
        
    <nav id="nav">
        <ul >
            <li ><a href="#skills" className="text-dark">Technologies</a></li>
            <li ><a href="#projects" className="text-dark">Projects</a></li>
            <li ><a href="#bio" className="text-dark">About Me</a></li>
            <li ><a href="#contact" className="text-dark">Contact</a></li>
        </ul>
    </nav>
    </React.Fragment>
    );
}

export default Navigation;

