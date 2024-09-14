import React, { FC } from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Row, Col } from 'react-bootstrap';

const ShopFooter: FC = () => {
    return (
        <Container fluid className='cs-bg-2 mt-5 py-5 shadow'>
            <Row className='px-5'>
                <Col lg={6} md={12} className='mb-lg-0 mb-3 d-flex flex-row align-items-center justify-content-lg-start justify-content-center text-lg-start text-center'>
                    <p className='m-0'>Розробник сайту</p>
                    <Button href='https://mrseager.github.io/gallery-page/' target="_blank" className='px-1 py-0 border-start-0 border-end-0 rounded-0 cs-link border-2 bg-transparent cs-fc'>Mr. Seager</Button>
                </Col>
                <Col lg={6} md={12} className='px-0'>
                    <Container fluid className='px-0 d-flex flex-md-row flex-column justify-content-lg-end justify-content-center gap-3'>
                        <Button className='cs-btn-2 border-2 bg-transparent cs-fc'>OLX</Button>
                        <Button className='cs-btn-2 border-2 bg-transparent cs-fc'>VIBER</Button>
                        <Button className='cs-btn-2 border-2 bg-transparent cs-fc'>TELEGRAM</Button>
                        <Button className='cs-btn-2 border-2 bg-transparent cs-fc'>INSTAGRAM</Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default ShopFooter;