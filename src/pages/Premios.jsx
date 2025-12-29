import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Countdown from '../components/Countdown';
import { Link } from 'react-router-dom';

export default function Premios() {
    const premios = [
        {
            id: 1,
            name: 'DARKNETS CS570',
            image: 'https://images.unsplash.com/photo-1587829191301-7acb349b69f7?w=300&h=300&fit=crop',
            descripcion: 'Mouse gaming de alta precisión'
        },
        {
            id: 2,
            name: 'WOOTING 60HE',
            image: 'https://images.unsplash.com/photo-1587829191301-7acb349b69f7?w=300&h=300&fit=crop',
            descripcion: 'Teclado mecánico gaming'
        },
        {
            id: 3,
            name: 'WLMOUSE BEAST X MINI PRO',
            image: '../../public/images/prizes/WLMOUSE BEAST X MINI PRO.png',
            descripcion: 'Mouse inalámbrico compacto'
        },
        {
            id: 4,
            name: 'RIFT C710',
            image: 'https://images.unsplash.com/photo-1589241468327-c6b70f8ffe35?w=300&h=300&fit=crop',
            descripcion: 'Control gaming profesional'
        },
        {
            id: 5,
            name: 'PREMIO 5',
            image: 'https://images.unsplash.com/photo-1587829191301-7acb349b69f7?w=300&h=300&fit=crop',
            descripcion: 'Periférico gaming exclusivo'
        },
    ];

    return (
        <div className="min-vh-100 pt-5 pb-5 px-4" style={{ backgroundColor: '#000' }}>
            <Container>
                {/* Hero Description Section */}
                <div style={{ marginBottom: '60px', paddingBottom: '40px', borderBottom: '2px solid #ff00ff' }}>
                    <h1 style={{ color: '#ff00ff', fontSize: '42px', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase' }}>
                        TU PODRÍAS GANAR CUALQUIERA DE ESTOS PREMIOS
                    </h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div>
                            <p style={{ color: '#ff00ff', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                                SUSCRIBETE AHORA
                            </p>
                            <p style={{ color: '#f1f1f1', fontSize: '16px', lineHeight: '1.6' }}>
                                y estarás participando por alguno de estos increíbles periféricos que se renuevan mes a mes.
                            </p>
                        </div>
                        <Link to="/suscripciones" style={{ textDecoration: 'none' }}>
                            <Button
                                style={{
                                    backgroundColor: '#ff00ff',
                                    borderColor: '#ff00ff',
                                    color: '#000',
                                    padding: '14px 30px',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    border: 'none',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                Quiero Participar
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Featured Prize Section */}
                <div style={{ marginBottom: '60px' }}>
                    <Card
                        style={{
                            borderColor: '#ff00ff',
                            borderWidth: '4px',
                            backgroundColor: '#fff',
                            borderRadius: '20px',
                            padding: '40px',
                        }}
                    >
                        <Row className="align-items-center">
                            <Col md={4}>
                                <img
                                    src={premios[1].image}
                                    alt={premios[1].name}
                                    style={{
                                        width: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                    }}
                                />
                            </Col>
                            <Col md={4}>
                                <p style={{ color: '#ff00ff', fontSize: '12px', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase' }}>
                                    PREMIO DESTACADO
                                </p>
                                <h2 style={{ color: '#000', fontSize: '32px', fontWeight: 'bold', marginBottom: '15px', textTransform: 'uppercase', fontStyle: 'italic' }}>
                                    {premios[1].name}
                                </h2>
                                <p style={{ color: '#ff00ff', fontSize: '14px', fontWeight: 'bold' }}>
                                    FECHA: jue. 28 ago
                                </p>
                            </Col>
                            <Col md={4} style={{ textAlign: 'center' }}>
                                <Link to="/suscripciones" style={{ textDecoration: 'none' }}>
                                    <Button
                                        style={{
                                            backgroundColor: '#ff00ff',
                                            borderColor: '#ff00ff',
                                            color: '#000',
                                            padding: '14px 30px',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            border: 'none',
                                            width: '100%',
                                        }}
                                    >
                                        Suscribirme Ahora
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Card>
                </div>

                {/* Countdown Section */}
                <section className="py-4 px-4" style={{ backgroundColor: '#1a1a1a', marginBottom: '60px' }}>
                    <Countdown />
                </section>

                {/* All Prizes Grid */}
                <div>
                    <h2 style={{ color: '#ff00ff', fontSize: '32px', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center' }}>
                        Todos Los Premios
                    </h2>
                    <Row className="g-4">
                        {premios.map((premio) => (
                            <Col lg={4} md={6} sm={6} xs={12} key={premio.id}>
                                <Card
                                    className="h-100 shadow-sm"
                                    style={{
                                        borderColor: '#ff00ff',
                                        borderWidth: '3px',
                                        backgroundColor: '#1a1a1a',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#fff';
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        const title = e.currentTarget.querySelector('.card-title');
                                        const text = e.currentTarget.querySelector('.card-text');
                                        const badge = e.currentTarget.querySelector('.badge');
                                        if (title) title.style.color = '#000';
                                        if (text) text.style.color = '#000';
                                        if (badge) {
                                            badge.style.backgroundColor = '#ff00ff';
                                            badge.style.color = '#fff';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#1a1a1a';
                                        e.currentTarget.style.transform = 'scale(1)';
                                        const title = e.currentTarget.querySelector('.card-title');
                                        const text = e.currentTarget.querySelector('.card-text');
                                        const badge = e.currentTarget.querySelector('.badge');
                                        if (title) title.style.color = '#fff';
                                        if (text) text.style.color = '#f1f1f1';
                                        if (badge) {
                                            badge.style.backgroundColor = '#ff00ff';
                                            badge.style.color = '#fff';
                                        }
                                    }}
                                >
                                    <div style={{
                                        width: '100%',
                                        height: '250px',
                                        overflow: 'hidden',
                                        borderBottom: '2px solid #ff00ff',
                                    }}>
                                        <img
                                            src={premio.image}
                                            alt={premio.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.transform = 'scale(1.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.transform = 'scale(1)';
                                            }}
                                        />
                                    </div>
                                    <Card.Body>
                                        <span className="badge fw-bold mb-3" style={{ backgroundColor: '#ff00ff', color: '#fff' }}>
                                            PREMIO DESTACADO
                                        </span>
                                        <Card.Title className="fs-5 fw-bold mt-3 mb-2" style={{ color: '#fff' }}>
                                            {premio.name}
                                        </Card.Title>
                                        <Card.Text className="mb-4" style={{ color: '#f1f1f1' }}>
                                            {premio.descripcion}
                                        </Card.Text>
                                        <Link to="/suscripciones" style={{ textDecoration: 'none' }}>
                                            <Button
                                                className="w-100 fw-bold text-uppercase"
                                                style={{
                                                    backgroundColor: '#ff00ff',
                                                    borderColor: '#ff00ff',
                                                    color: '#000',
                                                    border: 'none',
                                                }}
                                            >
                                                ¡Participar ya!
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
}
