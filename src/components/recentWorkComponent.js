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
                        <Media object src="/photos/download.jpg" alt="" />
                    </Media>
                </Col> 
                <Col md="6">       
                    <Media body className="alt">
                        <Media heading>
                        Media Heading 
                        </Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                    
                </Col>
            </Row>
            <Row className="row-content">
                <Col md="6">
                    <Media body className="alt">
                        <Media heading>
                        Media Heading 
                        </Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                </Col>
                <Col md="6">    
                    <Media className="mid" href="#">
                        <Media object src="/photos/images.jpg" alt="" />
                    </Media>
                </Col>
            </Row>    
            <Row className="row-content">
                <Col md="6">
                    <Media className="mid" href="#">
                        <Media object src="/photos/download.jpg" alt="" />
                    </Media>
                </Col>
                <Col md="6">
                    <Media body className="alt">
                        <Media heading>
                        Media Heading 
                        </Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                    
                </Col>
                
            </Row>
        </Container>
       
    );
}

export default Projects;