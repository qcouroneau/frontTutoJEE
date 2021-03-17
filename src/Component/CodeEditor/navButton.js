import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function NavButton() {
    return (
        <Container>
            <Row>
                <Col>
                    <Button color="secondary" size="lg">Cours Précédent</Button>
                </Col>
                <Col>
                    <Button color="primary" size="lg">Cours Suivant</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default NavButton;