import React from 'react';


function Skills() {
    return (
        <React.Fragment>
        <nav id="nav">
        <ul>
            <li><a href="#skills" class="active">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#bio">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <section id="skills" class="main special">
    <header class="major">
        <h2>Magna veroeros</h2>
    </header>
    <ul class="features">
        <li>
            
            <span class="icon solid major style1 fa-code"><i class="fab fa-js"></i></span>
            <h3>Ipsum consequat</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
        </li>
        <li>
            <span class="icon major style3 fa-copy"></span>
            <h3>Amed sed feugiat</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
        </li>
        <li>
            <span class="icon major style5 fa-gem"></span>
            <h3>Dolor nullam</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
        </li>
    </ul>
    <footer class="major">
        <ul class="actions special">
            <li><a href="generic.html" class="button">Learn More</a></li>
        </ul>
    </footer>
</section>
</React.Fragment>
    );
}

export default Skills;