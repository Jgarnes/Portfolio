import React from 'react';
import { Container, Row, Col, Media} from 'reactstrap';

function Projects() {
    return (
        <Container id="projects">
            <Row>
                <Col>
            <h1 className="heading alt">Projects</h1>
                </Col>
            </Row>
            <Row className="row-content">
                <Col>
                    <Media>
                        <Media  href="#">
                            <Media object src="/photos/download.jpg" alt="" />
                        </Media>
                        <Media body className="alt">
                            <Media heading>
                            Media Heading 
                            </Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                    </Media>
                </Col>
            </Row>
            <Row className="row-content">
                <Col >
                    <Media>
                        <Media body className="alt">
                            <Media heading>
                            Media Heading 
                            </Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                        <Media right href="#">
                            <Media object src="/photos/images.jpg" alt="" />
                        </Media>
                    </Media>
                </Col>
            </Row>    
            <Row className="row-content">
                <Col>
                    <Media>
                        <Media left href="#">
                            <Media object src="/photos/download.jpg" alt="" />
                        </Media>
                        <Media body className="alt">
                            <Media heading>
                            Media Heading 
                            </Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                    </Media>
                </Col>
                
            </Row>
        </Container>
       
    );
}

export default Projects;