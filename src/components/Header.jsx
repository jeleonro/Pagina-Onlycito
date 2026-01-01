import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <Navbar bg="black" expand="lg" sticky="top" className="py-3">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-4" style={{ color: '#ff00ff' }}>
                    <img src="/icons/logo.png" alt="" style={{height:'50px', marginLeft:'70px'}}/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-3">
                        <Nav.Link as={Link} to="/premios" className="text-light">
                            Premios
                        </Nav.Link>
                        <Nav.Link as={Link} to="/ganadores" className="text-light">
                            Ganadores
                        </Nav.Link>
                        <Nav.Link as={Link} to="/beneficios" className="text-light">
                            Beneficios
                        </Nav.Link>
                        <Nav.Link as={Link} to="/como-funciona" className="text-light">
                            ¿Cómo funciona?
                        </Nav.Link>
                        <div style={{
                            color: 'white',
                            alignItems: 'center',
                            fontSize: '30px'
                        }}>|</div>
                        <Nav.Link as={Link} to="/login" className="px-3 fw-bold" style={{
                            color: 'white',
                            borderColor: 'none',
                            border:'50px',
                            alignContent:'center',
                        }}>
                            <h3 style={{
                                display:'flex',
                                alignItems: 'center',
                                fontSize: '20px',
                                marginBottom:'0'
                            }}>Iniciar Sesión</h3>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/suscripciones">
                            <Button className="px-4 fw-bold" style={{ backgroundColor: '#ff00ff', borderColor: '#ff00ff', color: '#000' }}>
                                Suscribirme
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
