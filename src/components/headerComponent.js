import React from 'react';

function Header() {
    return (
    <header id="header" className="alt">
        <div className="logo" data-aos="fade-down"  data-aos-duration="3000" data-aos-easing="ease-in-out"><img src="/photos/headshot.jpg"  alt="" /></div>
        <h1>Hello, My name is Jeremy Garnes <br/></h1> 
        <p>I am a Full Stack Developer</p>    
    </header>
    );
}

export default Header;