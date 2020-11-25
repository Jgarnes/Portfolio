import React from 'react';
import { FaReact, FaHtml5, FaBootstrap, FaNodeJs, FaGithub} from 'react-icons/fa';
import { SiJavascript, SiCss3, SiMongodb, SiRedux, SiVisualstudiocode } from 'react-icons/si';
import { Container, Row, Col, Media } from 'reactstrap';

function Skills() {
    return (
        <Container fluid id="skills" className="alt bg-light">
            <Row>
                <Col>
                    <h1 className="heading">Technologies</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Media src="" className="line"></Media>
                </Col>
            </Row>
            <Row lg='5' className="squeeze">
                <Col >
                    <FaReact color="blue" className="icon" />
                </Col>
                <Col>     
                    <FaHtml5 color="orange" className="icon"/>
                </Col>
                <Col> 
                    <FaBootstrap color="purple" className="icon"/>
                </Col> 
                <Col> 
                    <FaNodeJs color="green" className="icon"/>
                </Col> 
                <Col>  
                    <FaGithub className="icon"/>
                </Col>
            
                <Col>
                    <SiJavascript className="icon" />
                </Col>
                <Col>    
                    <SiCss3 color="blue" className="icon"/>
                </Col>
                <Col> 
                    <SiMongodb color="green" className="icon"/>
                </Col> 
                <Col>
                    <SiRedux color="purple" className="icon"/>
                </Col> 
                <Col>  
                    <SiVisualstudiocode color="blue" className="icon"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;