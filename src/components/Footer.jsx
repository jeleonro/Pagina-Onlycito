import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-5" style={{ borderTop: '3px solid #ff00ff' }}>
            <Container>
                <Row className="mb-5">
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="fw-bold mb-3" style={{ color: '#ff00ff' }}>Juega ps Demonio</h5>
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
                        <div className="justifyContent-center d-flex flex-row-reverse gap-2 ">
                            <a href="https://www.tiktok.com/@OnlyRGX" target='_blank'><div class="betterhover:group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32" fill="white" class="size-4 fill-current" aria-label="TikTok"><path d="M25.7376 6.41476C24.0142 5.29125 22.7695 3.49253 22.3818 1.39624C22.2979 0.943256 22.252 0.477067 22.252 0H16.751L16.7425 22.0476C16.65 24.5169 14.6182 26.4982 12.1272 26.4982C11.3533 26.4982 10.6237 26.3047 9.98194 25.9667C8.51033 25.1921 7.50259 23.649 7.50259 21.8736C7.50259 19.3235 9.57713 17.249 12.1272 17.249C12.6035 17.249 13.0596 17.3275 13.4916 17.4627V11.8466C13.0448 11.786 12.5903 11.748 12.1272 11.748C6.54224 11.7487 2 16.291 2 21.8744C2 25.3001 3.71169 28.3319 6.32313 30.1648C7.968 31.3194 9.96873 32 12.1264 32C17.7098 32 22.252 27.4578 22.252 21.8744V10.6944C24.4097 12.2429 27.053 13.1559 29.9061 13.1559V7.65483C28.3692 7.65483 26.938 7.19796 25.7384 6.41554L25.7376 6.41476Z" fill="current"></path></svg></div></a>
                            <a href="https://kick.com/onlyrgx" target="_blank"><img src="/icons/kick.png" alt=""  style={{
                                height:'30px'
                            }} /></a> 
                            <a href="https://www.instagram.com/OnlyRGX" target="_blank"><img src="/icons/logotipo-de-instagram.png" alt=""  style={{
                                height:'30px'
                            }} /></a> 
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
