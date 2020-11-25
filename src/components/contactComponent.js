import React from 'react';
import { Container, Row, Col, Media} from 'reactstrap';
import { FaGithub, FaLinkedin, FaHome } from 'react-icons/fa';
import { SiAdobeacrobatreader } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

function Contact() {
    return (
<Container fluid id="contact" className="alt bg-light">
    <Row>
        <Col>
    <h1 className="heading alt"> Contact </h1>
        </Col>
    </Row>
    <Row>
        <Col>
            <Media src="" className="line"></Media>
        </Col>
    </Row>
    <Row height="auto" >
        <Col className="mid">
            <a href="https://www.linkedin.com/in/jeremy-garnes" target="_blank" rel="noopener noreferrer"> <FaLinkedin color="blue" className="footcon" /> <p className="p1">Linkedin </p> </a>
        </Col >
        <Col className="mid">
            <a href="https://github.com/Jgarnes" target="_blank" rel="noopener noreferrer"> <FaGithub className="footcon" /> <p className="p1">Github</p></a>
        </Col>
        <Col className="mid" >
            <a href="/resume/myresume.pdf" target="_blank" rel="noopener noreferrer"> <SiAdobeacrobatreader color="red" className="footcon" /> <p className="p1"> Resume</p> </a>
        </Col>
        <Col className="mid">
            <FaHome className="footcon" /> <p className="p2"> Location: <br /> Laurel, Maryland </p>
        </Col>
        <Col  className="mid">
            <MdEmail className="footcon" /> <p className="p2"> Email: <br/> J06Garnes@Gmail.com </p>
        </Col>        
    </Row>
</Container>
);
}

export default Contact;