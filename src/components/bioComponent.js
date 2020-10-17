import React from 'react';
import { Container, Row, Col, Media} from 'reactstrap';

function Bio() {
    return (
        <Container fluid id="bio" className="bg-light">
            <Row>
                <Col>
            <h1 className="heading alt">About Me</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Media src="" className="line"></Media>
                </Col>
            </Row>
            <Row className="row-content alt">
                <Col>
                    <p>Transitioning my skills from over 5 years’ experience in theater, event production, and production management to a career in
                    website development. Proficient with various front-end and back-end frameworks as well as management of underlying
                    databases. Professional and detail-oriented with strong leadership and communication skills. Proven ability to plan, organize,
                    and execute, to meet both customer expectations and organizational goals.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Bio;