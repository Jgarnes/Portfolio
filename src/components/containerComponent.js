import React from 'react';
import Contact from './contactComponent';
import Header from './headerComponent';
import Bio from './bioComponent';
import Projects from './recentWorkComponent';
import Skills from './skillsComponent';
import Footer from './footerComponent';
import Navigation from './naviComponent';

function Holder() {

    return (
        <div id="wrapper" >
            <Header />
            <Navigation />
            <Skills />
            <Projects />
            <Bio />
            <Contact />
            
            <Footer />
        </div>
    );
}

export default Holder;