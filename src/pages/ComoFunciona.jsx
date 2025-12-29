import { Container, Row, Col, Card, Alert } from 'react-bootstrap';

const steps = [
    {
        number: 1,
        title: 'Elige tu plan',
        description: 'Selecciona el plan de suscripción que mejor se adapte a tu presupuesto y necesidades'
    },
    {
        number: 2,
        title: 'Completa el pago',
        description: 'Realiza el pago de forma segura a través de nuestras opciones de pago'
    },
    {
        number: 3,
        title: 'Participa en sorteos',
        description: 'Una vez suscrito, participas automáticamente en todos los sorteos semanales'
    },
    {
        number: 4,
        title: '¡Espera tu suerte!',
        description: 'Cruza los dedos y espera el resultado. Podrías ser el próximo ganador'
    },
];

export default function ComoFunciona() {
    return (
        <div className="min-vh-100 pt-5 pb-5 px-4 bg-light">
            <Container>
                <h1 className="text-center mb-2 fs-1 fw-bold">¿Cómo Funciona?</h1>
                <p className="text-center text-muted mb-5 fs-5">
                    Es simple: suscríbete, participa y gana
                </p>

                <Row className="g-4 mb-5">
                    {steps.map((step) => (
                        <Col lg={3} md={6} key={step.number}>
                            <Card className="h-100 shadow-sm border-secondary">
                                <Card.Body>
                                    <div className="bg-warning text-black rounded-circle d-inline-flex align-items-center justify-content-center fw-bold fs-5 mb-3" style={{ width: '48px', height: '48px' }}>
                                        {step.number}
                                    </div>
                                    <Card.Title className="fs-5 fw-bold mb-3">{step.title}</Card.Title>
                                    <Card.Text className="text-muted">{step.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Card style={{ borderColor: '#ff00ff', borderWidth: '2px' }}>
                    <Card.Body className="p-5">
                        <Card.Title className="fs-4 fw-bold mb-4">Requisitos importantes</Card.Title>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex gap-3">
                                <span className="text-success fs-5" style={{ color: '#ff00ff !important' }}>✓</span>
                                <span>Debes ser mayor de 18 años</span>
                            </li>
                            <li className="mb-3 d-flex gap-3">
                                <span className="text-success fs-5" style={{ color: '#ff00ff !important' }}>✓</span>
                                <span>Tu suscripción debe estar activa durante el sorteo</span>
                            </li>
                            <li className="mb-3 d-flex gap-3">
                                <span className="text-success fs-5" style={{ color: '#ff00ff !important' }}>✓</span>
                                <span>Verificaremos tu identidad antes de entregar premios</span>
                            </li>
                            <li className="d-flex gap-3">
                                <span className="text-success fs-5" style={{ color: '#ff00ff !important' }}>✓</span>
                                <span>Los resultados de los sorteos son completamente legales y transparentes</span>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}
