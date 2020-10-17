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
            <Row className="squeeze">
                <Col >
                    <FaReact className="icon" />
                </Col>
                <Col>    
                    <FaHtml5 className="icon"/>
                </Col>
                <Col> 
                    <FaBootstrap className="icon"/>
                </Col> 
                <Col> 
                    <FaNodeJs className="icon"/>
                </Col> 
                <Col>  
                    <FaGithub className="icon"/>
                </Col>
            </Row>
            <Row className="squeeze">
                <Col>
                    <SiJavascript className="icon" />
                </Col>
                <Col>    
                    <SiCss3 className="icon"/>
                </Col>
                <Col> 
                    <SiMongodb className="icon"/>
                </Col> 
                <Col>
                    <SiRedux className="icon"/>
                </Col> 
                <Col>  
                    <SiVisualstudiocode className="icon"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;