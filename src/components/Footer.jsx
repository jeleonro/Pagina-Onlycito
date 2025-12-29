import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-5" style={{ borderTop: '3px solid #ff00ff' }}>
            <Container>
                <Row className="mb-5">
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="fw-bold mb-3" style={{ color: '#ff00ff' }}>No Hay Sin Suerte</h5>
                        <p className="">La mejor comunidad de sorteos y premios increíbles.</p>
                    </Col>

                    <Col md={4} className="mb-4 mb-md-0">
                        <h6 className="fw-bold mb-3" style={{ color: '#ff00ff' }}>¿Necesitas Ayuda?</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">Envianos un correo electronico a:</li>
                            <li className="mb-2"><Link to="/ganadores" className="text-decoration-none">soporte@onlyrgx.com</Link></li>
                            <li className="mb-2">Horario : L - V de 9am a 6pm | Sáb. de 9am a 2pm</li>
                        </ul>
                    </Col>

                    <Col md={4} className="mb-4 mb-md-0">
                        <h6 className="fw-bold mb-3" style={{ color: '#ff00ff' }}>Informacion:</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"></li>
                            <li className="mb-2">RUC : 000000000000</li>
                            <li className="mb-2">JUEGA DEMONIO</li>
                        </ul>
                    </Col>
                </Row>

                <hr className="border-secondary" />
                <Row className="mx-5">
                    <Col>
                        <div className="text-start">
                            <p>COPYRIGHT &copy; 2025 Juega Demonio</p>
                        </div>
                    </Col>
                    <Col className="gap-3">
                        <div className="text-end">
                            <a href="https://kick.com/onlyrgx"><img src="../../public/icons/kick.png" alt="" style={{
                                height:'30px'
                            }} /></a> 
                            <i class="bi bi-facebook"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
