import { Container, Row, Col, Button } from 'react-bootstrap';

export default function HeroSection() {
    return (
        <section
            className="d-flex align-items-center justify-content-center"
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #000000 0%, #1a0033 100%)',
                padding: 'clamp(20px, 5vw, 80px)',
            }}
        >
            <Container fluid style={{ marginLeft: 'clamp(20px, 5vw, 80px)', marginRight: 'clamp(20px, 5vw, 80px)'}}>
                <Row className="align-items-center">
                    <Col lg={6} className="text-white mb-5 mb-lg-0">
                        <h1
                            className="fw-bold mb-4"
                            style={{
                                color: '#ff00ff',
                                fontSize: 'clamp(32px, 8vw, 80px)',
                                lineHeight: '1.1',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                            }}
                        >
                            ÚNETE A LOS<br />
                            TIOS - OIJI OIJI
                        </h1>
                        <p
                            className="mb-5"
                            style={{
                                fontSize: 'clamp(14px, 2.5vw, 18px)',
                                lineHeight: '1.6',
                                color: '#f1f1f1',
                            }}
                        >
                            La comunidad más ganadora de todo internet, accede a{' '}
                            <span style={{ color: '#ff00ff', fontWeight: 'bold' }}>premios y descuentos</span> exclusivos.
                        </p>
                        <Button
                            className="px-5 py-3 fw-bold text-uppercase"
                            style={{
                                backgroundColor: '#ff00ff',
                                borderColor: '#ff00ff',
                                color: '#000',
                                fontSize: '18px',
                                letterSpacing: '1px',
                                border: 'none',
                            }}
                        >
                            Suscribete
                        </Button>
                    </Col>
                    <Col lg={6} className="text-center">
                        <div
                            style={{
                                fontSize: '200px',
                                margin: '0',
                                lineHeight: '1',
                            }}
                        >
                            <img src="/images/person/atudo.png" alt="" style={{height:'100%', borderRadius:'50px'}} />
                        </div>
                        <p
                            className="mt-3"
                            style={{
                                color: '#ff00ff',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                            }}
                        >
                            SUSCRIBETE<br />
                            <span style={{ fontSize: '14px', fontWeight: 'bold',color: '#f1f1f1' }}>
                                Y participa por dos sorteos al mes
                            </span>
                        </p>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
