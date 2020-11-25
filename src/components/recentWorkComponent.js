import React from 'react';
import { Container, Row, Col, Media} from 'reactstrap';

function Projects() {

    return (
        <Container fluid id="projects" className="bg-light">
            <Row>
                <Col>
            <h1 className="heading alt">Projects</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Media src="" className="line"></Media>
                </Col>
            </Row>
            <Row className="row-content">
                <Col md="6">
                    <Media className="mid" href="#">
                        <a href="https://romantic-allen-8674b4.netlify.app/" target="_blank" rel="noopener noreferrer"><Media height="325px" width="100%" className="photo" object src="/photos/thermo.jpg" alt="" /></a>
                    </Media>
                </Col> 
                <Col md="6" style={{marginTop:"auto", marginBottom:"auto"}}>       
                    <Media body className="alt">
                        <Media heading>
                            Weather App
                        </Media>
                            Need to check the weather. Use this app I created using JavaScript, React hooks, and an API
                        </Media>
                    
                </Col>
            </Row>
            <Row className="row-content">
                <Col md="6 order-md-12">    
                    <Media className="mid">
                       <a href="https://xenodochial-golick-7b4fc1.netlify.app/" target="_blank" rel="noopener noreferrer"> <Media height="325px" width="100%" className="photo" object src="/photos/calc.jpg" alt=""/></a>
                    </Media>
                </Col>
                <Col md="6" style={{marginTop:"auto", marginBottom:"auto"}}>
                    <Media body className="alt">
                        <Media heading>
                            Great Scott!!! 
                        </Media>
                            Where would the Doc be without his calculator. A simple calculator I created using JavaScript
                    </Media>
                </Col>
            </Row>    
            <Row className="row-content">
                <Col md="6">
                    <Media className="mid" href="#">
                        <a href="https://jeremygarnes.netlify.app/" target="_blank" rel="noopener noreferrer"><Media height="325px" width="100%" className="photo" object src="/photos/folio.jpg" alt="" /></a>
                    </Media>
                </Col>
                <Col md="6" style={{marginTop:"auto", marginBottom:"auto"}}>
                    <Media body className="alt">
                        <Media heading>
                            Portfolio V 0.5
                        </Media>
                         My first portfolio site. Was taking me awhile to get this one up, so I whipped this one up using React.js.
                    </Media>
                </Col>
            </Row>
        </Container>
       
    );
}

export default Projects;